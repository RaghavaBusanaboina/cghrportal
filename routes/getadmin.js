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
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     let currentMonth = date.getMonth();
//     let currentDate = date.getDate();
//     let weekWorkingDays = [];
//     let monthWorkingDays = [];
//     async function calculateWorkingingHours(query, type) {
//       const empattendance = await EmployeeAttendance.find(query);
//       console.log(empattendance);
//       if (type === "week") {
//         weekWorkingDays.push(empattendance.length);
//       }
//       if (type === "month") {
//         monthWorkingDays.push(empattendance.length);
//       }
//       if (!empattendance)
//         return res.status(404).send({ data: "no data found" });
//       var hours = [];
//       for (let i = 0; i < empattendance.length; i++) {
//         const element = empattendance[i];
//         let TotalWorkingHours = calWorkingHours(
//           element.inTime,
//           element.outTime
//         );
//         hours.push(TotalWorkingHours);
//       }
//       let hoursmins = totalHoursMins(hours);
//       return hoursmins;
//     }
//     const empData = await EmployeeRegisters.find({
//       organisation: req.user.organisation,
//     });
//     var countlen = empData.length;
//     let finaldata = {};
//     let total = {};
//     let totalLastWeekHours = [];
//     let totalLastMonthHours = [];
//     for (let i = 0; i < empData.length; i++) {
//       let weekquery = {
//         EmployeeId: empData[i].EmployeeId, //
//         organisation: req.user.organisation,
//         inTime: { $nin: ["pending", "Holiday"] },
//         outTime: { $nin: ["pending", "Holiday"] },

//         ADate: {
//           $gte: new Date(currentYear, currentMonth, currentDate - 8),
//           $lt: new Date(currentYear, currentMonth, currentDate),
//         },
//       };
//       let monthquery = {
//         EmployeeId: empData[i].EmployeeId, //
//         organisation: req.user.organisation,
//         inTime: { $nin: ["pending", "Holiday"] },
//         outTime: { $nin: ["pending", "Holiday"] },

//         ADate: {
//           $gte: new Date(currentYear, currentMonth - 1, 01),
//           $lt: new Date(currentYear, currentMonth + 1, 01),
//         },
//       };
//       const lastWeekHours = await calculateWorkingingHours(
//         (query = weekquery),
//         (type = "week")
//       );
//       totalLastWeekHours.push(lastWeekHours);
//       const lastMonthHours = await calculateWorkingingHours(
//         (query = monthquery),
//         (type = "month")
//       );
//       totalLastMonthHours.push(lastMonthHours);

//       finaldata[empData[i].EmployeeId] = {
//         EmployeId: empData[i].EmployeeId,
//         lastWeekHours: `${lastWeekHours.split(":")[0]}hrs ${
//           lastWeekHours.split(":")[1]
//         } mins`,
//         lastMonthHours: `${lastMonthHours.split(":")[0]}hrs ${
//           lastMonthHours.split(":")[1]
//         } mins`,
//         weekWorkingdays: weekWorkingDays[i],
//         monthWorkingdays: monthWorkingDays[i],
//       };
//     }
//     var thmweek = totalHoursMins(totalLastWeekHours);
//     var thmmonth = totalHoursMins(totalLastMonthHours);
//     total["totalLastWeekHours"] = `${Math.round(
//       eval(thmweek.split(":")[0]) / countlen
//     )}hrs ${Math.round(eval(thmweek.split(":")[1]) / countlen)} mins`;
//     total["totalLastMonthHours"] = `${Math.round(
//       eval(thmmonth.split(":")[0]) / countlen
//     )}hrs ${Math.round(eval(thmmonth.split(":")[1]) / countlen)} mins`;
//     return res
//       .status(200)
//       .send({ finaldata, total, count: `${empData.length}` });
//     // .send({ finaldata: finaldata, totalHours: total, count: empData.length });
//   } catch (error) {
//     console.log(`${error}`);
//     res.status(400).send({ data: error });
//   }
// });

//get production hours for all employees for the last 7 and last 30days
router.post("/productionhours/week&month", auth, async (req, res) => {
  try {
    await redisset.getweekmonth((organisation = req.user.organisation));
    var value = await redisget.getweekmonth();
    if (value === {} || value === null) {
      await redisset.getweekmonth((organisation = req.user.organisation));
    }
    if ("data" in value) return res.status(400).send(value);
    return res.status(200).send(value);
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
