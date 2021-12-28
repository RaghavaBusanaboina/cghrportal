/** @format */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middlewares/auth");
const both = require("../middlewares/both");
const mongoose = require("mongoose");
const moment = require("moment");
const { EmployeeAttendance } = require("../models/employeeAttendance");
const { Holidays } = require("../models/holidays");
const { EmployeeLeave } = require("../models/leaves");
const { EmployeeTermination } = require("../models/employeeTermination");
const { RegisterHr, generateAuthToken } = require("../models/registerHr");
const { EmployeeRegisters } = require("../models/employeeRegisters");
const { Companydetails, CompanyTimings } = require("../models/companyprofile");
const {
  totalHoursMins,
  calWorkingHours,
  empIdGeneration,
} = require("../helperFunctions/helperFunctions");
const {
  validatecompanydata,
  validatecompanytimingsdata,
  validateEmployeedata,
  validateemployeeTermination,
  validateHolidaydata,
  validateRegister,
  validateLoginhr,
} = require("../validations/validations");
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
    const { error } = validateLoginhr(data);
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
    var data = req.body;
    if ("EmployeeId" in data && "Password" in data) {
      const emp = await EmployeeRegisters.findOne({
        EmployeeId: req.body.EmployeeId,
      });
      if (!emp) return res.status(400).send({ data: "Invalid Employee id !" });
      const salt = await bcrypt.genSalt(10);
      emp.Password = await bcrypt.hash(req.body.Password, salt);
      await EmployeeRegisters.findOneAndUpdate(
        { EmployeeId: req.body.EmployeeId },
        { Password: emp.Password }
      );
      return res.send({ data: "password reset successfull..!" });
    } else {
      return res
        .status(400)
        .send({ data: "password and EmployeeId are required!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `reset password -->${error}` });
  }
});
// add employees into db changes
router.post("/addemployee", auth, async (req, res) => {
  try {
    const data = req.body;
    console.log("addemp", data);
    console.log("before validation");
    const { error } = validateEmployeedata(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    console.log("after vallidation", error);
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
      $or: [{ Email: data.Email }, { Phone: data.Phone }],
    });
    console.log("empterm", empterm);

    // console.log(empterm);
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
    const find_empid_termination = await EmployeeTermination.find({
      organisation: req.user.organisation,
    })
      .sort({ _id: -1 })
      .limit(1);
    console.log("find_empid_termination", find_empid_termination);
    if (find_empid_termination.length > 0) {
      var terminated_empid = find_empid_termination[0].EmployeeId;
      if (findempid.length > 0) {
        var lastId = findempid[0].EmployeeId;
        //incrementing the last id for new emp

        var num = empIdGeneration(lastId, idCode);
        var termnum = empIdGeneration(terminated_empid, idCode);
        console.log("before", data);
        var final = `${Math.max(num, termnum)}`;
        var finalnum;
        if (final.length === 1) {
          finalnum = `000${final}`;
        } else if (final.length === 2) {
          finalnum = `00${final}`;
        } else if (final.length === 3) {
          finalnum = `0${final}`;
        } else if (final.length === 4) {
          finalnum = `${final}`;
        }
        data["EmployeeId"] = idCode + finalnum;
        console.log("after", data);
      } else {
        data["EmployeeId"] = idCode + "0001";
      }
    } else {
      if (findempid.length > 0) {
        var lastId = findempid[0].EmployeeId;
        //incrementing the last id for new emp

        var num = empIdGeneration(lastId, idCode);
        console.log("before", data);
        data["EmployeeId"] = idCode + num;
        console.log("after", data);
      } else {
        data["EmployeeId"] = idCode + "0001";
      }
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
    if (data.status === "Approved") {
      var to = new Date(findemp.to_Date);
      var from = new Date(findemp.from_Date);
      var timeDiff = Math.abs(from.getTime() - to.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      for (let i = 0; i <= diffDays; i++) {
        var from = new Date(findemp.from_Date);
        from.setDate(from.getDate() + i);
        var day = moment(from).format("DD/MM/YYYY");
        var leaveData = {
          EmployeeId: findemp.EmployeeId,
          EmployeeName: findemp.EmployeeName,
          inTime: "Leave",
          outTime: "Leave",
          organisation: findemp.organisation,
          Date: day,
          ADate: new Date(from),
        };
        var addLeaves = new EmployeeAttendance(leaveData);
        await addLeaves.save();
      }
      console.log("leaves added to db");
    }
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
    console.log("------------------------");
    console.log(data);
    const { error } = validateHolidaydata(data.holidays[0]);
    data["organisation"] = req.user.organisation;
    if (error) return res.status(400).send({ data: error.details[0].message });
    console.log("data", data);
    const find_organisation = await Holidays.find({
      organisation: req.user.organisation,
    });
    console.log("find_organisation");

    console.log(find_organisation);
    data.holidays[0].Adate = new Date(Date.now());
    console.log(data);
    if (find_organisation.length === 0) {
      console.log("before save ", data);
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

//delete holiday based on index
router.post("/deleteHolidays", auth, async (req, res) => {
  try {
    console.log("data", req.body);
    const query = {
      organisation: req.body.organisation,
      "holidays._id": mongoose.Types.ObjectId(req.body._id),
    };
    const del = { "holidays.$": "" };
    const del_holidays = await Holidays.findOneAndUpdate(
      query,
      {
        $unset: del,
      },
      { new: true }
    );
    console.log("del_holidays", del_holidays);
    return res.status(200).send({ data: del_holidays });
  } catch (error) {
    console.log(`${error}`);
    return res.status(404).send(`${error}`);
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
  console.log(data);
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
    const d1 = new CompanyTimings(data);
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
      inTime: { $nin: ["pending", "Holiday"] },
      outTime: { $nin: ["pending", "Holiday"] },
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
    var output = hoursmins.split(":");
    return res.status(200).send({
      data: `${output[0]} hrs ${output[1]} mins`,
      WorkingDays: empattendance.length,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(400).send({ data: error });
  }
});
// Employee termination
router.post("/employeetermination", auth, async (req, res) => {
  try {
    const data = req.body;
    await EmployeeRegisters.findOneAndUpdate(
      { EmployeeId: data.EmployeeId },
      { isTerminated: true },
      { new: true }
    );
    const emp = await EmployeeRegisters.findOne({
      EmployeeId: data.EmployeeId,
    });
    if (!emp) return res.status(400).send({ data: "Employee not found!" });
    data["Email"] = emp.Email;
    data["Phone"] = emp.Phone;
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
    console.log("before validation");
    const { error } = validateemployeeTermination(data);
    console.log("after validation");
    console.log(`${error}`);
    if (error) return res.status(400).send({ data: error.details[0].message });
    console.log("after validation1--------");
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
    console.log("before empterm");
    const emptermination = new EmployeeTermination(data);
    console.log("before emp term save");
    await emptermination.save();
    console.log("after save------------");
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
