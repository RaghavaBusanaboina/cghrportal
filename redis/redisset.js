/** @format */
//
const redis = require("redis");
const { EmployeeAttendance } = require("../models/employeeAttendance");
const { EmployeeRegisters } = require("../models/employeeRegisters");
const {
  totalHoursMins,
  calWorkingHours,
} = require("../helperFunctions/helperFunctions");
const client = redis.createClient({
  url: "redis://redis-12100.c270.us-east-1-3.ec2.cloud.redislabs.com:12100",
  password: "b2hjj0OeKFipw1KnS2bPkNMB6KgnHoCW",
});

client.on("error", (err) => {
  console.log("Error", err.name);
});
client.on("connect", () => {
  console.log("redis Connected!!");
});
client.connect();
module.exports = {
  test: async () => {
    await client.SET("1", { valuee: "h", hello123: "v" }).catch((err) => {
      console.log(err);
    });
  },
  getweekmonth: async (organisation) => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDate = date.getDate();
    let weekWorkingDays = [];
    let monthWorkingDays = [];
    async function calculateWorkingingHours(query, type) {
      const empattendance = await EmployeeAttendance.find(query).select(
        "inTime outTime"
      );
      console.log(empattendance);

      if (type === "week") {
        weekWorkingDays.push(empattendance.length);
      }
      if (type === "month") {
        monthWorkingDays.push(empattendance.length);
      }
      if (!empattendance)
        return res.status(404).send({ data: "no data found" });
      var hours = [];
      for (let i = 0; i < empattendance.length; i++) {
        const element = empattendance[i];
        let TotalWorkingHours = calWorkingHours(
          element.inTime,
          element.outTime
        );
        hours.push(TotalWorkingHours);
      }
      let hoursmins = totalHoursMins(hours);
      return hoursmins;
    }
    const empData = await EmployeeRegisters.find({
      organisation: organisation,
    });
    var countlen = empData.length;
    let finaldata = {};
    let total = {};
    let totalLastWeekHours = [];
    let totalLastMonthHours = [];
    for (let i = 0; i < empData.length; i++) {
      let weekquery = {
        EmployeeId: empData[i].EmployeeId, //
        organisation: organisation,
        inTime: { $nin: ["pending", "Holiday"] },
        outTime: { $nin: ["pending", "Holiday"] },

        ADate: {
          $gte: new Date(currentYear, currentMonth, currentDate - 8),
          $lt: new Date(currentYear, currentMonth, currentDate),
        },
      };
      let monthquery = {
        EmployeeId: empData[i].EmployeeId, //
        organisation: organisation,
        inTime: { $nin: ["pending", "Holiday"] },
        outTime: { $nin: ["pending", "Holiday"] },

        ADate: {
          $gte: new Date(currentYear, currentMonth - 1, 01),
          $lt: new Date(currentYear, currentMonth + 1, 01),
        },
      };
      const lastWeekHours = await calculateWorkingingHours(
        (query = weekquery),
        (type = "week")
      );
      totalLastWeekHours.push(lastWeekHours);
      const lastMonthHours = await calculateWorkingingHours(
        (query = monthquery),
        (type = "month")
      );
      totalLastMonthHours.push(lastMonthHours);

      finaldata[empData[i].EmployeeId] = {
        EmployeId: empData[i].EmployeeId,
        lastWeekHours: `${lastWeekHours.split(":")[0]}hrs ${
          lastWeekHours.split(":")[1]
        } mins`,
        lastMonthHours: `${lastMonthHours.split(":")[0]}hrs ${
          lastMonthHours.split(":")[1]
        } mins`,
        weekWorkingdays: weekWorkingDays[i],
        monthWorkingdays: monthWorkingDays[i],
      };
    }
    var thmweek = totalHoursMins(totalLastWeekHours);
    var thmmonth = totalHoursMins(totalLastMonthHours);
    total["totalLastWeekHours"] = `${Math.round(
      eval(thmweek.split(":")[0]) / countlen
    )}hrs ${Math.round(eval(thmweek.split(":")[1]) / countlen)} mins`;
    total["totalLastMonthHours"] = `${Math.round(
      eval(thmmonth.split(":")[0]) / countlen
    )}hrs ${Math.round(eval(thmmonth.split(":")[1]) / countlen)} mins`;
    var result = {
      finaldata,
      total,
      count: `${empData.length}`,
      organisation: organisation,
    };
    await client
      .HSET("getweekmonth", organisation, JSON.stringify(result))
      .catch((err) => {
        console.log("error in hset emp attendance", err);
      });
    // return res
    //   .status(200)
    //   .send({ finaldata, total, count: `${empData.length}` });
  },
  redisExistCheck: async (hash, key) => {
    var data = await client.HEXISTS(hash, key);
    return data;
  },
};
