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

// var data = "0225";
// console.log(Number(data));
// let id = `${Number(data) + 1}`;
// console.log(id);
// if (id.length === 1) {
//   data = `000${id}`;
// } else if (id.length === 2) {
//   data = `00${id}`;
// } else if (id.length === 3) {
//   data = `0${id}`;
// } else if (id.length === 4) {
//   data = `${id}`;
// }
// console.log(data);

// str = "123";
// console.log(~~~str); // expected result: 1234
// console.log(eval(str));
// console.log(Number(str));

// // new Date(Date.now());
// // console.log(new Date(Date.now()));

// console.log(Math.round(0.9));
// let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
// const moment = require("moment");

// var to = new Date("2021-12-30");
// var from = new Date("2022-01-31");
// // console.log(to);

// // console.log(from);
// var timeDiff = Math.abs(from.getTime() - to.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
// console.log(diffDays);
// for (let i = 0; i < 10; i++) {
//   var from = new Date("2022-01-31");
//   from.setDate(from.getDate() + i);
//   console.log(new Date(from));
// }
// console.log(Date.now());
// console.log(Date("20/12/2021"));
// console.log(new Date(moment(from).format("YYYY/MM/DD")));
//

// var from = new Date("2021-12-21");
// var to = new Date("2021-12-22");
// var today = new Date(Date.now());
// console.log(from < today);

// rand = Math.floor(Math.random() * 99999 + 99999);
// console.log(rand);

// var express = require("express");
// var nodemailer = require("nodemailer");
// var app = express();
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
// var smtpTransport = nodemailer.createTransport({
//   //   host: "smtp.gmail.com",
//   pool: true,
//   host: "smtp.codegene.io",
//   port: 587,
//   auth: {
//     user: "raghava@codegene.io",
//     pass: "hi!%}uyfniqG",
//   },
// });
// var rand, mailOptions, host, link;
// /*------------------SMTP Over-----------------------------*/

// /*------------------Routing Started ------------------------*/
// app.post("/", function (req, res) {
//   console.log("home");
//   res.send("homepage");
// });
// app.get("/send", function (req, res) {
//   rand = Math.floor(Math.random() * 100 + 54);
//   console.log("rand", rand);
//   host = req.get("host");
//   console.log("host", host);
//   link = "http://" + req.get("host") + "/verify?id=" + rand;
//   mailOptions = {
//     // to: "busanaboinaraghava@gmail.com",
//     to: "raghava7728@gmail.com",
//     subject: "Please confirm your Email account",
//     html:
//       "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
//       link +
//       ">Click here to verify</a>",
//   };
//   console.log(mailOptions);
//   smtpTransport.sendMail(mailOptions, function (error, response) {
//     if (error) {
//       console.log(`${error}`);
//       res.send(`${error}`);
//     } else {
//       console.log("Message sent: ");
//       res.end("sent");
//     }
//   });
// });

// app.get("/verify", function (req, res) {
//   console.log(req.protocol + ":/" + req.get("host"));
//   if (req.protocol + "://" + req.get("host") == "http://" + host) {
//     console.log("Domain is matched. Information is from Authentic email");
//     if (req.query.id == rand) {
//       console.log("email is verified");
//       res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
//     } else {
//       console.log("email is not verified");
//       res.end("<h1>Bad Request</h1>");
//     }
//   } else {
//     res.end("<h1>Request is from unknown source");
//   }
// });

/*--------------------Routing Over----------------------------*/
// var port = 4000;
// app.listen(port, "0.0.0.0", () => {
//   console.log(`Express Started on Port ${port}`);
// });
// console.log(Math.max(09, 10, 08));
console.log("2022-01-26" === "2022-01-26");
//get production hours for last 7 days and last 30days
// router.post("/productionhours/week&month", authemp, async (req, res) => {
//     try {
//       let date = new Date();
//       let currentYear = date.getFullYear();
//       let currentMonth = date.getMonth();
//       let currentDate = date.getDate();
//       const weekquery = {
//         EmployeeId: req.user.EmployeeId,
//         organisation: req.user.organisation,
//         ADate: {
//           $gte: new Date(currentYear, currentMonth, currentDate - 8),
//           $lt: new Date(currentYear, currentMonth, currentDate),
//         },
//       };
//       const monthquery = {
//         EmployeeId: req.user.EmployeeId,
//         organisation: req.user.organisation,
  
//         ADate: {
//           $gte: new Date(currentYear, currentMonth - 1, 01),
//           $lt: new Date(currentYear, currentMonth + 1, 01),
//         },
//       };
//       async function calculateWorkingingHours(query) {
//         const empattendance = await EmployeeAttendance.find(query);
//         console.log(empattendance);
//         if (!empattendance)
//           return res.status(404).send({ data: "no data found" });
//         var hours = [];
//         for (let i = 0; i < empattendance.length; i++) {
//           const element = empattendance[i];
//           console.log(element.inTime);
//           let TotalWorkingHours = calWorkingHours(
//             element.inTime,
//             element.outTime
//           );
//           console.log(TotalWorkingHours);
//           hours.push(TotalWorkingHours);
//         }
//         let hoursmins = totalHoursMins(hours);
//         console.log(hoursmins);
//         return hoursmins;
//       }
//       const lastWeekHours = await calculateWorkingingHours(weekquery);
//       console.log(lastWeekHours);
//       const lastMonthHours = await calculateWorkingingHours(monthquery);
//       return res.status(200).send({
//         lastWeekHours: `${lastWeekHours.split(":")[0]}hrs ${
//           lastWeekHours.split(":")[1]
//         } mins`,
//         lastMonthHours: `${lastMonthHours.split(":")[0]}hrs ${
//           lastMonthHours.split(":")[1]
//         } mins`,
//       });
//     } catch (error) {
//       console.log(`${error}`);
//       res.status(400).send({ data: error });
//     }
//   });

