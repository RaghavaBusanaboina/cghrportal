/** @format */
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const both = require("../middlewares/both");
const { EmployeeAttendance } = require("../models/employeeAttendance");
const { Holidays } = require("../models/holidays");
const { EmployeeLeave } = require("../models/leaves");
const { EmployeeTermination } = require("../models/employeeTermination");
const { EmployeeRegisters } = require("../models/employeeRegisters");
const { Companydetails, CompanyTimings } = require("../models/companyprofile");
const {
  totalHoursMins,
  calWorkingHours,
} = require("../helperFunctions/helperFunctions");
const redisset = require("../redis/redisset");
const redisget = require("../redis/regisget");
//---------redis--------------------
const redis = require("redis");
const client = redis.createClient({
  url: "redis://redis-12100.c270.us-east-1-3.ec2.cloud.redislabs.com:12100",
  password: "b2hjj0OeKFipw1KnS2bPkNMB6KgnHoCW",
});
client.connect();
//--------------------------------------
const limit = 2;
//get only emp list.
router.post("/getall", auth, async (req, res) => {
  try {
    const count = await EmployeeRegisters.find({
      organisation: req.user.organisation,
    }).count();
    console.log(count);
    const empData = await EmployeeRegisters.find({
      organisation: req.user.organisation,
    })
      .sort({ _id: -1 })
      .skip(req.body.skip)
      .limit(limit);
    if (empData.length > 0)
      return res.status(200).send({ data: empData, count: count });
    else
      return res
        .status(404)
        .send({ data: [], skip: req.body.skip - 2 * limit });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `get all emp list -->${error}` });
  }
});
//get all leaves of employees
router.post("/allleaves", auth, async (req, res) => {
  try {
    let empleaves = await EmployeeLeave.find({
      organisation: req.user.organisation,
    })
      .sort({ _id: -1 })
      .skip(req.body.skip)
      .limit(limit);
    if (empleaves.length > 0) return res.status(200).send({ data: empleaves });
    else
      return res
        .status(404)
        .send({ data: [], skip: req.body.skip - 2 * limit });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ data: `get all emp leaves -->${error}` });
  }
});
//get attendances for a month, year from user inps,
router.post("/attendancestats", both, async (req, res) => {
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
    const findempattendance = await EmployeeAttendance.find(query);
    console.log(findempattendance);
    if (!findempattendance)
      return res.status(404).send({ data: "no data found" });
    return res.send({ data: findempattendance });
  } catch (error) {
    console.log(`${error}`);
    res.status(400).send({ data: error });
  }
});
//get holidays list of an organisation
router.get("/holidays", auth, async (req, res) => {
  try {
    let holidays = await Holidays.find({
      organisation: req.user.organisation,
    }).sort({ 'holidays[0]["holidays"]["date"]': -1 });
    if (holidays.length <= 0)
      return res.status(400).send({ data: "no holidays, please add.!" });
    return res.send({ data: holidays });
  } catch (error) {
    console.log("holidays -->", error);
    return res.status(400).send({ data: `${error}` });
  }
});
//company details get route
router.get("/companydetails", both, async (req, res) => {
  const settings = await Companydetails.find({
    organisation: req.user.organisation,
  });
  console.log(settings);
  if (!settings)
    return res.status(400).send({ data: "something went wrong!.." });
  return res.status(200).send({ data: settings });
});
//get company timings
router.get("/companytimings", both, async (req, res) => {
  console.log("get company timings");
  const timings = await CompanyTimings.find({
    organisation: req.user.organisation,
  });
  console.log(timings);
  if (timings.length === 0) {
    return res
      .status(400)
      .send({ data: "timings not found,please add company timings..!" });
  }
  return res.status(200).send({ data: timings });
});
// //get production hours for all employees for the last 7 and last 30days
// router.post("/productionhours/week&month", auth, async (req, res) => {
//   try {

//     // .send({ finaldata: finaldata, totalHours: total, count: empData.length });
//   } catch (error) {
//     console.log(`${error}`);
//     res.status(400).send({ data: error });
//   }
// });

//get production hours for all employees for the last 7 and last 30days
router.post("/productionhours/week&month", auth, async (req, res) => {
  try {
    var data = await redisset.redisExistCheck(
      "getweekmonth0",
      req.user.organisation
    );
    if (data) {
      const empData = await EmployeeRegisters.find({
        organisation: req.user.organisation,
      });
      console.log("data----->", data);
      var values = await client.HGET("getweekmonth0", req.user.organisation);
      console.log("values", values);
      var parsedData = JSON.parse(JSON.stringify(values));
      console.log("----++++->", JSON.parse(parsedData));
      var emplen = Number(
        JSON.parse(parsedData[req.user.organisation]["count"])
      );
      console.log("number");
      console.log("emplen--->", emplen);
      if (emplen === empData.length) {
        console.log("in if");
        console.log("----->", parsedData);
        console.log("JSON.parse(parsedData)", JSON.parse(parsedData));
        return res.status(200).send(JSON.parse(parsedData));
      } else {
        console.log("if under else emplen ");
        await redisset.getweekmonth((organisation = req.user.organisation));
        var values = await client.HGET("getweekmonth0", req.user.organisation);
        var parsedData = JSON.parse(JSON.stringify(values));
        console.log("if under else before return", parsedData);
        return res.status(200).send(JSON.parse(parsedData));
      }
    } else {
      log;
      await redisset.getweekmonth((organisation = req.user.organisation));
      var values = await client.HGET("getweekmonth0", req.user.organisation);
      var parsedData = JSON.parse(JSON.stringify(values));
      return res.status(200).send(JSON.parse(parsedData));
    }
  } catch (error) {
    console.log(`${error}`);
    res.status(400).send({ data: error });
  }
});

//get Employee termination
router.post("/getemployeetermination", auth, async (req, res) => {
  try {
    const emptermination = await EmployeeTermination.find({
      organisation: req.user.organisation,
    })
      .skip(req.body.skip)
      .limit(limit);
    if (emptermination.length > 0)
      return res.status(200).send({ data: emptermination });
    else
      return res
        .status(404)
        .send({ data: [], skip: req.body.skip - 2 * limit });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ data: `get employee termination -->${error}` });
  }
});
module.exports = router;
