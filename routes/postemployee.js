/** @format */
var requestIp = require("request-ip");
var CronJob1 = require("cron").CronJob;
var CronJob2 = require("cron").CronJob;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { JoiPassword } = require("joi-password");
const authemp = require("../middlewares/authemp");
const moment = require("moment");
const { createToken } = require("../helperFunctions/tokenGeneration");
const {
  EmployeeRegisters,
  validateEducationaldetails,
  validateprofile,
} = require("../models/employeeRegisters");
const { EmployeeAttendance } = require("../models/employeeAttendance");
const { validateEmployeeLeave, EmployeeLeave } = require("../models/leaves");
const both = require("../middlewares/both");
const blocklisttoken = require("../middlewares/blacklisttoken");
function validateLogin(emp) {
  const schema = Joi.object({
    Email: Joi.string().min(5).required(),
    Password: Joi.string().min(5).required(),
  });
  return schema.validate(emp);
}
//change
// generateAuthToken = (EmployeeId, EmployeeName, Password, organisation) => {
//   const token = jwt.sign(
//     {
//       EmployeeId: EmployeeId,
//       EmployeeName: EmployeeName,
//       Password: Password,
//       organisation: organisation,
//     },
//     config.get("jwtPrivateKey"),
//     {
//       expiresIn: "12h",
//     }
//   );
//   console.log(token);
//   return token;
// };
function validatePassword(data) {
  const schema = Joi.object({
    oldPassword: Joi.string().min(3).required(),
    newPassword: JoiPassword.string()
      .min(8)
      .max(12)
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required()
      .messages({
        "password.minOfUppercase":
          "password contains atleast 1 uppercase letter",
        "password.minOfLowercase":
          "password contains atleast 1 lowercase letter",
        "password.minOfSpecialCharacters":
          "password contains atleast 1 special character",
        "password.minOfNumeric": "password contains atleast 1 number",
        "password.noWhiteSpaces": "password doestnot contains any space",
      }),
    conformPassword: JoiPassword.string()
      .min(8)
      .max(12)
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required()
      .messages({
        "password.minOfUppercase":
          "password contains atleast 1 uppercase letter",
        "password.minOfLowercase":
          "password contains atleast 1 lowercase letter",
        "password.minOfSpecialCharacters":
          "password contains atleast 1 special character",
        "password.minOfNumeric": "password contains atleast 1 number",
        "password.noWhiteSpaces": "password doestnot contains any space",
      }),
  });

  return schema.validate(data);
}
function validateinTime(data) {
  const schema = Joi.object({
    inTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    timelimit: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  });
  return schema.validate(data);
}
function validateoutTime(data) {
  const schema = Joi.object({
    outTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  });
  return schema.validate(data);
}
//route for emp login
router.post("/login", async (req, res) => {
  console.log("login route------------");
  try {
    console.log("login route");
    const data = req.body;
    const { error } = validateLogin(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    const emp = await EmployeeRegisters.findOne({
      Email: data.Email,
    });
    if (!emp) return res.status(400).send({ data: "Invalid credentials..!" });
    const validpass = await bcrypt.compare(data.Password, emp.Password);
    if (!validpass) return res.status(400).send({ data: "Invalid Password!" });
    console.log("before ip");
    // var ip = req.connection.remoteAddress || req.socket.remoteAddress;
    var ip = requestIp.getClientIp(req);
    console.log(ip);
    console.log("after ip-----------");
    const token = await createToken(
      (EmployeeId = emp.EmployeeId),
      (device = req.headers["user-agent"]),
      (EmployeeName = emp.EmployeeName),
      (Password = emp.Password),
      (organisation = emp.organisation),
      (ip = ip)
    );
    console.log(token);
    return res
      .header("x-auth-token", token)
      .send({ token: token, message: "login successfull..!", ip: ip });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `emplogin -->${error}` });
  }
});
//checkin time
router.post("/inTime", authemp, async (req, res) => {
  try {
    const data = req.body;
    console.log("intime------------------");
    function date() {
      let date = new Date();
      let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      return moment(d1).format("DD/MM/YYYY");
    }
    const { error } = validateinTime(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    const findEmp = await EmployeeAttendance.findOne({
      EmployeeId: req.user.EmployeeId,
      Date: date(),
    });
    console.log("findemp");
    console.log(findEmp);
    data["organisation"] = req.user.organisation;
    if (
      findEmp === null &&
      (await EmployeeRegisters.findOne({
        EmployeeId: req.user.EmployeeId,
        EmployeeName: req.user.EmployeeName,
      }))
    ) {
      if (data.inTime > data.timelimit)
        return res.status(402).send({ data: "please contact your Admin" });
      const attendance = new EmployeeAttendance({
        EmployeeId: req.user.EmployeeId,
        EmployeeName: req.user.EmployeeName,
        inTime: data.inTime,
        organisation: req.user.organisation,
      });
      await attendance.save();
      return res.send(attendance);
    }

    if (
      findEmp.inTime === "pending" &&
      (await EmployeeRegisters.findOne({
        EmployeeId: req.user.EmployeeId,
        EmployeeName: req.user.EmployeeName,
      }))
    ) {
      if (data.inTime > data.timelimit)
        return res.status(402).send({ data: "please contact your Admin" });
      const attendance = await EmployeeAttendance.findOneAndUpdate(
        {
          EmployeeId: req.user.EmployeeId,
          EmployeeName: req.user.EmployeeName,
          Date: date(),
        },
        {
          inTime: data.inTime,
        },
        { new: true }
      );
      console.log(attendance);
      return res.send(attendance);
    }
    if (
      findEmp.EmployeeId === req.user.EmployeeId &&
      findEmp.inTime !== "pending" &&
      (await EmployeeRegisters.findOne({
        EmployeeId: req.user.EmployeeId,
        EmployeeName: req.user.EmployeeName,
      }))
    ) {
      return res
        .status(400)
        .send({ data: "employee already loggedin, you cant login again" });
    } else {
      return res.status(404).send({ data: "emp not found" });
    }
  } catch (error) {
    console.log(`in time-->${error}`);
    return res.status(400).send({ data: error });
  }
});
//checkout time
router.post("/outTime", authemp, async (req, res) => {
  try {
    function date() {
      let date = new Date();
      let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      return moment(d1).format("DD/MM/YYYY");
    }
    const data = req.body;
    const { error } = validateoutTime(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    const findEmp = await EmployeeAttendance.findOne({
      EmployeeId: req.user.EmployeeId,
      organisation: req.user.organisation,
      Date: date(),
    });
    if (
      findEmp.EmployeeId === req.user.EmployeeId &&
      findEmp.organisation === req.user.organisation &&
      findEmp.outTime === "pending" &&
      (await EmployeeRegisters.findOne({
        EmployeeId: req.user.EmployeeId,
        EmployeeName: req.user.EmployeeName,
      }))
    ) {
      const attendance = await EmployeeAttendance.findOneAndUpdate(
        {
          EmployeeId: req.user.EmployeeId,
          EmployeeName: req.user.EmployeeName,
          organisation: req.user.organisation,
          Date: date(),
        },
        {
          outTime: data.outTime,
        },
        { new: true }
      );
      console.log(attendance);
      return res.send(attendance);
    }
    if (
      findEmp.EmployeeId === req.user.EmployeeId &&
      findEmp.organisation === req.user.organisation &&
      findEmp.outTime !== "pending" &&
      (await EmployeeRegisters.findOne({
        EmployeeId: req.user.EmployeeId,
        EmployeeName: req.user.EmployeeName,
      }))
    ) {
      return res.status(400).send({
        data: "employee already loggedout, you cant logout again",
      });
    } else {
      return res.status(404).send({ data: "emp not found" });
    }
  } catch (error) {
    `in time-->${error}`;
    return res.status(400).send({ data: error || "please checkin first" });
  }
});
//auto checkout if user forgot to checkout before 7:30pm
var cronJob1 = new CronJob1({
  cronTime: "00 55 04 * * * ",
  onTick: async function () {
    console.log("cron started");
    let filter = { outTime: "pending" };
    let update = { outTime: "19:30" };
    const attendance = await EmployeeAttendance.updateMany(
      filter,
      { $set: update },
      { new: true }
    );
    console.log(attendance);
    console.log("default attendance updated ------------------->");
  },
  start: true,
  runOnInit: false,
});
console.log("11111", cronJob1);
//set holiday for saturdays and sundays
var cronJob2 = new CronJob2({
  cronTime: "00 02 04 * * sat,sun ",
  onTick: async function () {
    try {
      console.log("saturday and sunday holiday cron-->");
      const empData = await EmployeeRegisters.find({
        $or: [{ organisation: "Codegene" }, { organisation: "BGMI" }],
      }).select("EmployeeId EmployeeName -_id");
      console.log("cron3");
      console.log(empData);
      for (let i = 0; i < empData.length; i++) {
        const element = empData[i];
        let attendance = new EmployeeAttendance({
          EmployeeId: element.EmployeeId,
          EmployeeName: element.EmployeeName,
          inTime: "Holiday",
          outTime: "Holiday",
        });
        console.log(attendance);
        await attendance.save();
        console.log("holiday saved");
      }
    } catch (error) {
      console.log("error in cron job2");
      console.log(error);
    }
    // console.log(empData);
  },
  start: true,
  runOnInit: false,
});
console.log("22222", cronJob2);
//change password
router.post("/changepassword", authemp, async (req, res) => {
  try {
    const data = req.body;
    const { error } = validatePassword(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    const emp = await EmployeeRegisters.findOne({
      EmployeeId: req.user.EmployeeId,
    });
    if (!emp) return res.status(400).send({ data: "Invalid Employee id !" });
    const match = await bcrypt.compare(data.oldPassword, emp.Password);
    if (!match) return res.status(400).send({ data: "password not match !" });
    if (data.newPassword !== data.conformPassword)
      return res.send({ data: "both passwords must be same ...!" });
    const salt = await bcrypt.genSalt(10);
    emp.Password = await bcrypt.hash(data.newPassword, salt);
    await EmployeeRegisters.findOneAndUpdate(
      { EmployeeId: req.user.EmployeeId },
      { Password: emp.Password }
    );
    //await emp.save();
    return res.send({ data: "password changed successfully..!" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `emp change password -->${error}` });
  }
});
//applying leave
router.post("/applyleave", authemp, async (req, res) => {
  try {
    let data = req.body;
    data["EmployeeId"] = req.user.EmployeeId;
    data["EmployeeName"] = req.user.EmployeeName;
    const { error } = validateEmployeeLeave(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    data["organisation"] = req.user.organisation;
    const leave = new EmployeeLeave(data);
    await leave.save();
    console.log("data saved", data);
    res.status(200).send({ data: "leave applied" });
  } catch (error) {
    console.log(`leave catch-->${error}`);
    return res.status(400).send({ data: error });
  }
});
//post employee personal/imp data
router.post("/add/:name", authemp, async (req, res, next) => {
  const data = req.body;
  data["last_updated_on"] = new Date(Date.now());
  console.log(data);
  let name = req.params.name;
  console.log("req.user");
  console.log(req.user);
  const query = { EmployeeId: req.user.EmployeeId };
  console.log(query);
  if (name === "EducationalDetails") {
    const { error } = validateEducationaldetails(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    let update = { $push: { EducationalDetails: data } };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
  if (name === "profile") {
    const { error } = validateprofile(data);
    if (error) return res.status(400).send({ data: error.details[0].message });
    let update = { profile: data };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    console.log(emp_update);
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
  if (name === "jobExperiences") {
    console.log("data for job experiment");
    console.log(data);
    let update = { $push: { jobExperiences: data } };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
});
//update educational details
router.post("/updateEducationalDetails/:name", authemp, async (req, res) => {
  const data = req.body;
  data["percentage"] = Number(data["percentage"]);
  data["passedoutYear"] = Number(data["passedoutYear"]);
  data["last_updated_on"] = new Date(Date.now());
  console.log("printing data1", data);
  const { error } = validateEducationaldetails(data);
  if (error) return res.status(400).send({ data: error.details[0].message });
  let name = req.params.name;
  console.log("req.user", req.user);
  const query = {
    EmployeeId: req.user.EmployeeId,
    organisation: req.user.organisation,
  };
  console.log(query);
  if (name === "ssc") {
    let update = { $set: { "EducationalDetails.0": data } };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    console.log(emp_update);
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
  if (name === "degree") {
    let update = { $set: { "EducationalDetails.1": data } };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
  if (name === "ug") {
    let update = { $set: { "EducationalDetails.2": data } };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
  if (name === "pg") {
    let update = { $set: { "EducationalDetails.3": data } };
    let emp_update = await EmployeeRegisters.findOneAndUpdate(query, update, {
      new: true,
    });
    if (!emp_update) return res.status(400).send({ data: "Invalid data..!" });
    return res.send(emp_update);
  }
});
//route for logout..
router.post("/logout", blocklisttoken, async (req, res) => {
  console.log("logout route---------------------");
  return res.json({ message: "Token blacklisted. User logged out." });
});
module.exports = router;
