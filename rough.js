/** @format */

// /** @format */

// // var randomstring = Math.random().toString(36).slice(-8);
// // console.log(randomstring);
// const moment = require("moment");
// // let date = new Date();
// // // date = date.get;
// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getSeconds());
// // inTime = `${date.getHours()}:${date.getMinutes()}`;
// // console.log(inTime);

// // const config = require("config");
// // console.log(config.get("jwtPrivateKey"));
// // const moment = require("moment");
// // let date = new Date();
// // let d1 = new Date(date.getHours, date.getMinutes);
// // console.log(d1);
// // console.log(moment(d1).format("HH:MM"));

// // let date = new Date(2021 - 11 - 20);
// // let d1 = new Date(
// //   date.getFullYear(),
// //   date.getMonth(),
// //   date.getDate(),
// //   date.getHours(),
// //   date.getMinutes()
// // );
// // d = moment(d1).format("DD/MM/YYYY HH:MM");
// // // console.log(d);
// // inp = "2021-11-20";
// // function datesplit(inp) {
// //   return { year: eval(inp.split("-")[0]), month: eval(inp.split("-")[1]) };
// // }
// // data = datesplit(inp);
// // console.log(data.year);
// // console.log(year, month);
// // let date = new Date(year, month - 1, 1);
// // let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
// // d = moment(d1).format("DD/MM/YYYY");
// // console.log(d);
// var CronJob = require("cron").CronJob;

// // var cronJob1 = new CronJob({
// //   cronTime: "00 30 19 * * 5-6 ",
// //   onTick: function () {
// //     console.log("cron start");
// //   },
// //   start: true,
// //   runOnInit: false,
// // });
// // console.log(cronJob1);organisation: "Codegene",
// // const { EmployeeRegisters } = require("./models/employeeRegisters");
// // async function getdata() {
// //   const empData = await EmployeeRegisters.find({}).select(
// //     "EmployeeId EmployeeName -_id"
// //   );
// //   console.log(empData);
// //   return await empData;
// // }
// // console.log(getdata());
// // const empData = EmployeeRegisters.find({
// //   organisation: "Codegene",
// // }).select("EmployeeId EmployeeName -_id");
// // console.log(empData);

// // var cronJob4 = new CronJob({
// //   cronTime: "00 27 20 * * 4-6 ",
// //   onTick: function () {
// //     console.log("dummy cron-->");
// //   },
// //   start: true,
// //   runOnInit: false,
// // });
// // console.log(cronJob4);

// var cronJob5 = new CronJob({
//   cronTime: "00 38 20 * * 6,0 ",
//   onTick: function () {
//     console.log("dummy1 cron-->");
//   },
//   start: true,
//   runOnInit: false,
// });
// console.log(cronJob5);
// var cronJob5 = new CronJob({
//   cronTime: "00 38 20 * * 6,0 ",
//   onTick: function () {
//     console.log("dummy2 cron-->");
//   },
//   start: true,
//   runOnInit: false,
// });
// console.log(cronJob5);
// // let d1 = Date(date.getFullYear(), date.getMonth(), date.getDate());
// // console.log("d1", d1);
// let date = new Date();
// let currentYear = date.getFullYear();
// let currentMonth = date.getMonth();
// let currentDate = date.getDate();
// let d = Date(currentYear, currentMonth, currentDate);
// console.log(d);
// let d1 = new Date(currentYear, currentMonth, currentDate - 31);
// console.log(d1);
// const moment = require("moment");

// var from = "05/12/2011";
// var to = "30/08/2022";

// // console.log(fromDate, toDate);
// var experience = (from, to) => {
//   var date = (inp) => {
//     return {
//       date: eval(inp.split("/")[0]),
//       month: eval(inp.split("/")[1]),
//       year: eval(inp.split("/")[2]),
//     };
//   };
//   var fromDate = date(from);
//   var toDate = date(to);
//   var d1 = new Date(fromDate.year, fromDate.month, fromDate.date);
//   var d2 = new Date(toDate.year, toDate.month, toDate.date);
//   var Difference_In_Time = d2.getTime() - d1.getTime();
//   console.log(Difference_In_Time);
//   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//   return parseFloat(Difference_In_Days / 365).toFixed(2);
// };
// // console.log(experience(from, to));
// function today() {
//   let date = new Date();
//   let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//   return moment(d1).format("DD/MM/YYYY");
// }

// console.log(today());

// const data = {
//   bgmi2: {
//     lastWeekHours: "0:0",
//     lastMonthHours: "0:0",
//   },
//   bgmi1: {
//     lastWeekHours: "4:10",
//     lastMonthHours: "4:10",
//   },
// };
// data.keys(o).forEach((element) => {
//   console.log(o[element]);
// });
// console.log(d.next());
// for (let i = 0; i < data.length; i++) {
//   const element = array[i];
//   console.log(element);
// // }
// var CronJob = require("cron").CronJob;

// var cronJob2 = new CronJob({
//   cronTime: "00 17 09 * * 6,0 ",
//   onTick: async function () {
//     try {
//       console.log("saturday and sunday holiday cron-->");
//     } catch (error) {
//       console.log("error in cron job2");
//       console.log(error);
//     }
//     // console.log(empData);
//   },
//   start: true,
//   runOnInit: false,
// });DJDZJMJQKTWF2T4Y

// var data = { status: "Approved" };
// console.log(data);
// if ("_id" in data && "status" in data) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

var data = "0225";
console.log(Number(data));
let id = `${Number(data) + 1}`;
console.log(id);
if (id.length === 1) {
  data = `000${id}`;
} else if (id.length === 2) {
  data = `00${id}`;
} else if (id.length === 3) {
  data = `0${id}`;
} else if (id.length === 4) {
  data = `${id}`;
}
console.log(data);
