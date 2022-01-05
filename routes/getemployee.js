/** @format */
const express = require("express");
const router = express.Router();
const { EmployeeRegisters } = require("../models/employeeRegisters");
const both = require("../middlewares/both");
const {
  totalHoursMins,
  calWorkingHours,
} = require("../helperFunctions/helperFunctions");
const { EmployeeAttendance } = require("../models/employeeAttendance");
const { EmployeeLeave } = require("../models/leaves");
const authemp = require("../middlewares/authemp");
const limit = 2;

const csrf = require("csurf");
const cookieParser = require("cookie-parser");
var sessions = require("express-session");
router.get("/dummy", (req, res) => {
  console.log("-------------------");
  console.log(req.CSRFToken());
  const csrfProtection = csrf({
    cookie: true,
  });
  router.use(csrfProtection);
  // router.use(csrf());
  router.use(cookieParser());
  router.use(
    sessions({
      cookieName: "demo-session",
      secret: "this is a secret msg",
      duration: 30 * 60 * 1000,
      resave: true,
      saveUninitialized: true,
    })
  );
  router.use(csrfProtection);
  return res.json({ CSRFToken: req.CSRFToken() });
});
//get emp details by emp id
router.post("/details", authemp, async (req, res) => {
  try {
    const empData = await EmployeeRegisters.find({
      EmployeeId: req.user.EmployeeId,
    });
    if (!empData)
      return res
        .status(400)
        .send({ data: "id not found in employee Registers" });
    res.send({ data: empData });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `get emp details by id -->${error}` });
  }
});

//get emp data from emp id(emp attendance)..
router.post("/getattendance/:id", both, async (req, res) => {
  try {
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDate = date.getDate();
    const empData = await EmployeeAttendance.find({
      EmployeeId: req.params.id,
      ADate: {
        $lte: new Date(currentYear, currentMonth, currentDate, 23, 59, 59),
      },
    })
      .sort({ _id: -1 })
      .skip(req.body.skip)
      .limit(limit);
    if (!empData)
      return res
        .status(400)
        .send({ data: "id not found in employee attendance" });
    if (empData.length > 0) return res.status(200).send({ data: empData });
    else
      return res
        .status(400)
        .send({ data: [], skip: req.body.skip - 2 * limit });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ data: `get emp attendance by id -->${error}` });
  }
});

//get a perticular emp leave
router.post("/empleaves", authemp, async (req, res) => {
  try {
    const data = await EmployeeLeave.find({
      organisation: req.user.organisation,
      EmployeeId: req.user.EmployeeId,
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(`emp leaves get-->${error}`);
    return res.status(400).send({ data: `${error}` });
  }
});

//get emp leaves
router.post("/getleaves", authemp, async (req, res) => {
  try {
    const empleaves = await EmployeeLeave.find({
      organisation: req.user.organisation,
      EmployeeId: req.user.EmployeeId,
    })
      .sort({ _id: -1 })
      .skip(req.body.skip)
      .limit(limit);
    if (empleaves.length > 0) return res.status(200).send({ data: empleaves });
    else
      return res
        .status(400)
        .send({ data: [], skip: req.body.skip - 2 * limit });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `get emp leaves -->${error}` });
  }
});

//get production hours for last 7 days and last 30days
router.post("/productionhours/week&month", authemp, async (req, res) => {
  try {
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDate = date.getDate();
    const weekquery = {
      EmployeeId: req.user.EmployeeId,
      organisation: req.user.organisation,
      ADate: {
        $gte: new Date(currentYear, currentMonth, currentDate - 8),
        $lte: new Date(currentYear, currentMonth, currentDate - 1),
      },
    };
    const monthquery = {
      EmployeeId: req.user.EmployeeId,
      organisation: req.user.organisation,

      ADate: {
        $gte: new Date(currentYear, currentMonth - 1, 01),
        $lt: new Date(currentYear, currentMonth + 1, 01),
      },
    };
    async function calculateWorkingingHours(query) {
      const empattendance = await EmployeeAttendance.find(query);
      console.log(empattendance);
      if (!empattendance)
        return res.status(404).send({ data: "no data found" });
      var hours = [];
      for (let i = 0; i < empattendance.length; i++) {
        const element = empattendance[i];
        console.log(element.inTime);
        let TotalWorkingHours = calWorkingHours(
          element.inTime,
          element.outTime
        );
        console.log(TotalWorkingHours);
        hours.push(TotalWorkingHours);
      }
      let hoursmins = totalHoursMins(hours);
      console.log(hoursmins);
      return hoursmins;
    }
    const lastWeekHours = await calculateWorkingingHours(weekquery);
    console.log(lastWeekHours);
    const lastMonthHours = await calculateWorkingingHours(monthquery);
    return res.status(200).send({
      lastWeekHours: `${lastWeekHours.split(":")[0]}hrs ${
        lastWeekHours.split(":")[1]
      } mins`,
      lastMonthHours: `${lastMonthHours.split(":")[0]}hrs ${
        lastMonthHours.split(":")[1]
      } mins`,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(400).send({ data: error });
  }
});
module.exports = router;
