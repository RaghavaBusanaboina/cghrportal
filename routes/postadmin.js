/** @format */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth");
const both = require("../middlewares/both");
const mongoose = require("mongoose");
const moment = require("moment");
const { EmployeeAttendance } = require("../models/employeeAttendance");
const { Holidays, validateHolidaydata } = require("../models/holidays");
const { EmployeeLeave } = require("../models/leaves");
const {
  EmployeeTermination,
  validateemployeeTermination,
} = require("../models/employeeTermination");
const {
  RegisterHr,
  validateRegister,
  validateLogin,
  generateAuthToken,
} = require("../models/registerHr");
const {
  EmployeeRegisters,
  validateEmployeedata,
} = require("../models/employeeRegisters");
const {
  Companydetails,
  validatecompanydata,
  CompanyTimings,
  validatecompanytimingsdata,
} = require("../models/companyprofile");
const {
  totalHoursMins,
  calWorkingHours,
} = require("../helperFunctions/helperFunctions");
const limit = 2;
//admin register
router.post("/registerHr", async (req, res) => {
  try {
    const { error } = validateRegister(req.body);
    if (error) return res.status(400).send({ data: error.details[0].message });
    let admin = RegisterHr.findOne({ Email: req.body.Email });
    if (!admin)
      return res.status(400).send({ data: "Admin already registered..!" });
    admin = new RegisterHr(req.body);
    const salt = await bcrypt.genSalt(10);
    admin.Password = await bcrypt.hash(admin.Password, salt);
    await admin.save();
    return res.send(admin);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `registerHr -->${error}` });
  }
});
//admin login
router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    const { error } = validateLogin(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    const admin = await RegisterHr.findOne({ Email: data.Email });
    if (!admin) return res.status(400).send({ data: "Invalid data!" });
    const validpass = await bcrypt.compare(data.Password, admin.Password);
    if (!validpass) return res.status(400).send({ data: "Invalid Password!" });
    console.log(admin);
    const token = generateAuthToken(
      admin.isAdmin,
      admin.Email,
      admin.Name,
      admin.organisation
    );
    return res.header("x-auth-token", token).send(token);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `adminlogin -->${error}` });
  }
});
// password reset
router.post("/resetpassword", auth, async (req, res) => {
  try {
    const emp = await EmployeeRegisters.findOne({
      EmployeeId: req.body.EmployeeId,
    });
    if (!emp) return res.status(400).send({ data: "Invalid Employee id !" });
    const salt = await bcrypt.genSalt(10);
    emp.Password = await bcrypt.hash("12345", salt);
    await EmployeeRegisters.findOneAndUpdate(
      { EmployeeId: req.body.EmployeeId },
      { Password: emp.Password }
    );
    return res.send({ data: "password reset successfull..!" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `reset password -->${error}` });
  }
});
// add employees into db changes
router.post("/addemployee", auth, async (req, res) => {
  try {
    const data = req.body;
    const { error } = validateEmployeedata(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    const emp = await EmployeeRegisters.findOne({
      $or: [
        { EmployeeId: data.EmployeeId },
        { Email: data.Email },
        { Phone: data.Phone },
      ],
    });
    //check employee
    if (emp) return res.status(400).send({ data: "Employee already there!" });

    const empterm = await EmployeeTermination.findOne({
      EmployeeId: data.EmployeeId,
    });
    console.log("empterm");

    console.log(empterm);
    //check employeeid in terminated list
    if (empterm)
      return res.status(400).send({
        data: "Employeeid already there in terminated list..!",
      });
    //finding company id code
    const findCompanyIdCode = await Companydetails.findOne({
      organisation: req.user.organisation,
    });
    var idCode = findCompanyIdCode.companyIdCode;
    //find last emp id then increment that id
    const findempid = await EmployeeRegisters.find({
      organisation: req.user.organisation,
    })
      .sort({ _id: -1 })
      .limit(1);
    console.log(findempid);
    if (findempid.length > 0) {
      var lastId = findempid[0].EmployeeId;
      //incrementing the last id for new emp
      let idstring = lastId.split(idCode);
      var num = 0;
      let id = `${Number(idstring[1]) + 1}`;
      if (id.length === 1) {
        num = `000${id}`;
      } else if (id.length === 2) {
        num = `00${id}`;
      } else if (id.length === 3) {
        num = `0${id}`;
      } else if (id.length === 4) {
        num = `${id}`;
      }

      data["EmployeeId"] = idCode + num;
    } else {
      data["EmployeeId"] = idCode + "0001";
    }
    data["organisation"] = req.user.organisation;
    const empData = new EmployeeRegisters(data);
    const salt = await bcrypt.genSalt(10);
    empData.Password = await bcrypt.hash(empData.Password, salt);
    await empData.save();
    return res.send(empData);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `emp registers -->${error}` });
  }
});
//leave approval or rejected
router.post("/leavestatus", auth, async (req, res) => {
  console.log("post");
  const data = req.body;
  console.log(data);
  if ("_id" in data && "status" in data) {
    query = { _id: mongoose.Types.ObjectId(data._id), status: "pending" };
    update = { status: data.status };
    const findemp = await EmployeeLeave.findOneAndUpdate(query, update, {
      new: true,
    });
    console.log(findemp);
    if (!findemp)
      return res.status(404).send({ data: "Status already updated" });

    return res.send(findemp);
  } else {
    return res.status(404).send("_id and status are required");
  }
});
//post organisation holidays
router.post("/holidays", auth, async (req, res) => {
  try {
    const data = req.body;

    const { error } = validateHolidaydata(data);
    data["organisation"] = req.user.organisation;
    if (error) return res.status(400).send({ data: error.details[0].message });
    const find_organisation = await Holidays.find({
      organisation: req.user.organisation,
    });
    console.log("find_organisation");

    console.log(find_organisation);
    data.holidays[0].Adate = new Date(Date.now());
    console.log(data);
    if (find_organisation.length === 0) {
      const holiday = new Holidays(data);
      await holiday.save();
      console.log(holiday);
      return res.send({ data: holiday });
    }
    let add = await Holidays.findOneAndUpdate(
      { organisation: req.user.organisation },
      { $push: { holidays: data.holidays } },
      { new: true }
    );
    return res.send({ data: add });
  } catch (error) {
    console.log("holidays -->", error);
    return res.status(400).send({ data: `${error}` });
  }
});
//remove employee by id
router.delete("/removeemployee/:id", auth, async (req, res) => {
  try {
    let emp = await EmployeeRegisters.findOneAndRemove(
      { organisation: req.user.organisation, EmployeeId: req.params.id },
      { new: true }
    );
    if (!emp) return res.status(400).send({ data: "Employee not found!" });
    console.log(emp);
    return res.send({ data: emp });
  } catch (error) {
    console.log("remove employee -->", error);
    return res.status(400).send({ data: `${error}` });
  }
});
//company details post route
router.post("/companydetails", auth, async (req, res) => {
  const data = req.body;
  const { error } = validatecompanydata(data);
  if (error) return res.status(400).send({ data: error.details[0].message });
  const settings = await Companydetails.findOneAndUpdate(
    { organisation: req.user.organisation },
    data,
    { new: true }
  );
  console.log(settings);

  if (!settings) {
    data["organisation"] = req.user.organisation;
    const d1 = new Companydetails(data);
    await d1.save();
    return res.status(200).send({ data: d1 });
  }
  return res.status(200).send({ data: settings });
});
//company timings post route
router.post("/companytimings", auth, async (req, res) => {
  const data = req.body;
  const { error } = validatecompanytimingsdata(data);
  if (error) return res.status(400).send({ data: error.details[0].message });
  const timings = await CompanyTimings.findOneAndUpdate(
    { organisation: req.user.organisation },
    data,
    { new: true }
  );
  console.log(timings);

  if (timings === null) {
    data["organisation"] = req.user.organisation;
    const d1 = new Companydetails(data);
    await d1.save();
    return res.status(200).send({ data: d1 });
  }

  return res.status(200).send({ data: timings });
});
// emp intime,outtime and working hours
router.post("/productionhours", both, async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    function datesplit(inp) {
      return {
        year: eval(inp.split("-")[0]),
        month: eval(inp.split("-")[1]),
        date: eval(inp.split("-")[2]),
      };
    }
    const toyearmonth = datesplit(data.to_Date);
    const fromyearmonth = datesplit(data.from_Date);
    const query = {
      EmployeeId: data.EmployeeId,
      organisation: req.user.organisation,
      ADate: {
        $gte: new Date(
          fromyearmonth.year,
          fromyearmonth.month - 1,
          fromyearmonth.date
        ),
        $lte: new Date(
          toyearmonth.year,
          toyearmonth.month - 1,
          toyearmonth.date
        ),
      },
    };
    const empattendance = await EmployeeAttendance.find(query);
    console.log(empattendance);
    if (!empattendance) return res.status(404).send({ data: "no data found" });
    var hours = [];
    for (let i = 0; i < empattendance.length; i++) {
      const element = empattendance[i];
      console.log(element.inTime);
      let TotalWorkingHours = calWorkingHours(element.inTime, element.outTime);
      console.log(TotalWorkingHours);
      hours.push(TotalWorkingHours);
    }
    let hoursmins = totalHoursMins(hours);
    return res.status(200).send({ data: hoursmins });
  } catch (error) {
    console.log(`${error}`);
    res.status(400).send({ data: error });
  }
});
// Employee termination
router.post("/employeetermination", auth, async (req, res) => {
  try {
    const data = req.body;
    const emp = await EmployeeRegisters.findOne({
      EmployeeId: data.EmployeeId,
    });
    if (!emp) return res.status(400).send({ data: "Employee not found!" });
    data["EmployeeName"] = emp.EmployeeName;
    data["From"] = emp.createdOn;
    data["organisation"] = emp.organisation;
    data["EmployeeRecord"] = [emp];
    function today() {
      let date = new Date();
      let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      return moment(d1).format("DD/MM/YYYY");
    }
    var experience = (from, to) => {
      var date = (inp) => {
        return {
          date: eval(inp.split("/")[0]),
          month: eval(inp.split("/")[1]),
          year: eval(inp.split("/")[2]),
        };
      };
      var fromDate = date(from);
      var toDate = date(to);
      var d1 = new Date(fromDate.year, fromDate.month, fromDate.date);
      var d2 = new Date(toDate.year, toDate.month, toDate.date);
      var Difference_In_Time = d2.getTime() - d1.getTime();
      console.log(Difference_In_Time);
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      return parseFloat(Difference_In_Days / 365).toFixed(2);
    };
    data["ExperienceHere"] = experience(emp.createdOn, today());
    console.log(data);
    const { error } = validateemployeeTermination(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    await EmployeeAttendance.deleteMany({
      EmployeeId: data["EmployeeId"],
    })
      .then(function () {
        console.log("attendance deleted deleted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
    await EmployeeLeave.deleteMany({
      EmployeeId: data["EmployeeId"],
      organisation: emp.organisation,
    })
      .then(function () {
        console.log("leaves deleted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
    const emptermination = new EmployeeTermination(data);
    await emptermination.save();
    let findandremove = await EmployeeRegisters.findOneAndRemove(
      { organisation: emp.organisation, EmployeeId: data.EmployeeId },
      { new: true }
    );
    //change
    if (!findandremove)
      return res.status(400).send({ data: "Employee not found!" });
    console.log(findandremove);
    return res
      .status(200)
      .send({ data: "Employee termination was successfull" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `employee termination -->${error}` });
  }
});

module.exports = router;
