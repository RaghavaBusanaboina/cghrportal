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
// console.log("2022-01-26" === "2022-01-26");
// var out = {
//   finaldata: {
//     CG0001: {
//       EmployeId: "CG0001",
//       lastWeekHours: "20hrs 8 mins",
//       lastMonthHours: "28hrs 12 mins",
//       weekWorkingdays: 2,
//       monthWorkingdays: 3,
//     },
//     CG0002: {
//       EmployeId: "CG0002",
//       lastWeekHours: "0hrs 0 mins",
//       lastMonthHours: "0hrs 0 mins",
//       weekWorkingdays: 0,
//       monthWorkingdays: 0,
//     },
//     CG0003: {
//       EmployeId: "CG0003",
//       lastWeekHours: "14hrs 13 mins",
//       lastMonthHours: "20hrs 14 mins",
//       weekWorkingdays: 3,
//       monthWorkingdays: 5,
//     },
//     CG0005: {
//       EmployeId: "CG0005",
//       lastWeekHours: "2hrs 7 mins",
//       lastMonthHours: "2hrs 7 mins",
//       weekWorkingdays: 1,
//       monthWorkingdays: 2,
//     },
//     CG0007: {
//       EmployeId: "CG0007",
//       lastWeekHours: "0hrs 0 mins",
//       lastMonthHours: "0hrs 0 mins",
//       weekWorkingdays: 0,
//       monthWorkingdays: 0,
//     },
//   },
//   total: {
//     totalLastWeekHours: "7hrs 6 mins",
//     totalLastMonthHours: "10hrs 7 mins",
//   },
//   count: "5",
// };
// console.log(out);
// console.log("finding-----");
// console.log("data" in out);

// {
// 	"Email":"sairamakrishna@gmail.com",
// 	"Password":"12345"
// }{{
// 	"Email":"admin@codegene.io",
// 	"Password":"12345"
// }
//89361025924 bd

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

// // -----
// await client
//   .HSET("EmployeeAttendance", type, JSON.stringify(empattendance))
//   .catch((err) => {
//     console.log("error in hset emp attendance", err);
//   });
// var values = await client.HGETALL("EmployeeAttendance");
// var parsedData = JSON.parse(JSON.stringify(values));
// console.log("checkhere------------------", parsedData);
// console.log("**********************************", parsedData["week"]);

// var d = {
//   finaldata: {
//     BGMI0001: {
//       EmployeId: "BGMI0001",
//       lastWeekHours: "8hrs 54 mins",
//       lastMonthHours: "49hrs 41 mins",
//       weekWorkingdays: 3,
//       monthWorkingdays: 10,
//     },
//   },
//   total: {
//     totalLastWeekHours: "8hrs 54 mins",
//     totalLastMonthHours: "49hrs 41 mins",
//   },
//   count: "1",
//   organisation: "BGMII",
// };

//------------------tige-------------
// const tige = require("tiger-balm");
// const config = require("config");

// var pssd = "thisistradingpassdcantbedecrypted";
// var salt = "thisistradingsaltthatisencrypted";
// module.exports = {
// 	encrypt: (value) => {
// 		try {
// 			return tige.encrypt(pssd, salt, value);
// 		} catch (error) {
// 			return "tberror";
// 		}
// 	},
// 	decrypt: (value) => {
// 		try {
// 			return tige.decrypt(pssd, salt, value);
// 		} catch (error) {
// 			return error;
// 		}
// 	},
// 	decryptarr: (str) => {
// 		try {
// 			return JSON.parseFloat(tige.decrypt(pssd, salt, value));
// 		} catch (error) {
// 			console.log(error);

// 			return "tberror";
// 		}
// 	},
// };

// // console.log(module.exports.encrypt("hei"));
// // console.log(module.exports.decrypt("71f0acc17e4f67a94f7be6733ccff7fc"));
var d = "thisishportalsaltthatisencrypted";
console.log(d.length);

//-------------------------------------
/** @format */

// // reset password of admin
// router.post(
//   "/resetpwd",
//   cs,
//   [auth, admin],
//   amw(async (req, res) => {
//     if (req.user.type === 1) {
//       const { lerror } = await validate.getenc(req.body);
//       if (lerror) return res.status(400).send(error.details[0].message);
//       const deusrobj = crypto.decryptobj(req.body.enc);
//       if (deusrobj !== "tberror") {
//         const admin = await AdminReg.findOne({ adminid: deusrobj.adminid });
//         if (admin.length <= 0) return res.status(400).send("Admin not found");
//         else {
//           const salt1 = await bcrypt.genSalt(10);
//           var npassword = await bcrypt.hash(deusrobj.newpassword, salt1);
//           const upduser = await AdminReg.findOneAndUpdate(
//             {
//               adminid: admin.adminid,
//             },

//             { $set: { password: npassword } }
//           );
//           winston.info(
//             "Admin : " +
//               tige.decrypt(admin.email) +
//               "password reset by " +
//               req.user.email
//           );

//           await alert_Developers(
//             "Admin : " + admin.name + "password reset by " + req.user.name
//           );
//           res.send(crypto.encryptobj({ success: deusrobj.newpassword }));
//         }
//       } else {
//         //error while decrypting user
//         return res.status(400).send("Invalid Parameter");
//       }
//     } else {
//       return res.status(400).send("Invalid Admin Type!!");
//     }
//   })
// );

module.exports = router;

//------------------superjs-------------
// router.post(
//   "/validateotp",
//   ratecut,
//   cs,
//   amw(async (req, res) => {
//     //validating data
//     const { error } = await validate.getenc(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     const otpdecryobj = cryp.decryptobj(req.body.enc);
//     if (otpdecryobj !== "tberror") {
//       const { error } = validate.validateotp(otpdecryobj);
//       if (error) return res.status(400).send(error.details[0].message);
//       //searching for otp

//       var otpphn = tige.encrypt(otpdecryobj.phone);
//       const userche = await Agent.findOne({ phone: otpphn });
//       if (!userche) return res.status(400).send("Agent Not Found");
//       else {
//         if (userche.type === "SuperAgent") {
//           const otpsrch = await Otp.findOne({ phone: otpphn });
//           if (!otpsrch) return res.status(400).send("Otp request not found");
//           // generating otp expiry time
//           var stdate = new Date();
//           var etdate = new Date(otpsrch.expirytime);
//           var dif = stdate.getTime() - etdate.getTime();
//           var diffm = Math.round(dif / 60000);
//           if (diffm <= 2) {
//             if (otpsrch.otp === otpdecryobj.otp) {
//               // if otp is valid sending token
//               await Otp.deleteMany({ phone: otpphn });

//               res.send(
//                 cryp.encryptobj({ success: "Otp Sumbitted succesfully" })
//               );
//             } else {
//               //invalid otp
//               res.status(400).send("Invalid Otp");
//             }
//           } else {
//             await Otp.deleteMany({ phone: otpphn });
//             //otp expired
//             res.status(400).send("OTP Expired..");
//           }
//         } else {
//           res.status(400).send("Invalid Agent type!!");
//         }
//       }
//     } else {
//       //error while decrypting user
//       return res.status(400).send("Invalid Parameters");
//     }
//   })
// );

//super agent profile
router.post(
  "/supagprofile",
  cs,
  auth,
  amw(async (req, res) => {
    const user = await Agent.findOne({
      agentid: req.user.agentid,
      type: "SuperAgent",
    });

    if (!user) return res.status(400).send("SuperAgent not found");
    else {
      var agli = 0;
      const supag = await Agent.find({
        superagent: req.user.agentid,
        type: "MasterAgent",
      }).countDocuments();

      const list = await Agent.find({
        superagent: req.user.agentid,
        type: "MasterAgent",
      });
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        const age = await Agent.find({
          masteragent: e.agentid,
          type: "Agent",
        }).countDocuments();
        agli = agli + age;
      }

      var obj = {
        agentid: user.agentid,
        date: user.date,
        agentname: user.agentname,
        email: tige.decrypt(user.email),
        balance: user.balance,
        status: user.status,
        loginstatus: user.loginstatus,
        transferstatus: user.transferstatus,
        arena: user.arena,
        type: user.type,
        superagent: user.superagent,
        masteragent: user.masteragent,
        agent: user.agent,
        referral: user.referral,
        refname: user.refname,
        transmin: user.transmin,
        transmax: user.transmax,
        mastercount: supag,
        agentcount: agli,
      };
      res.send(cryp.encryptobj(obj));
    }
  })
);
//master agents under super agents
router.post(
  "/getmastagents",
  cs,
  auth,
  amw(async (req, res) => {
    const ag = await Agent.find({
      superagent: req.user.agentid,
      type: "MasterAgent",
    }).sort({ _id: -1 });
    if (ag && ag.length > 0) {
      var ags = [];
      await ag.forEach((user) => {
        var obj = {
          agentid: user.agentid,
          date: user.date,
          agentname: user.agentname,
          email: tige.decrypt(user.email),
          balance: user.balance,
          status: user.status,
          loginstatus: user.loginstatus,
          transferstatus: user.transferstatus,
          arena: user.arena,
          type: user.type,
          superagent: user.superagent,
          masteragent: user.masteragent,
          agent: user.agent,
          referral: user.referral,
          refname: user.refname,
          transmin: user.transmin,
          transmax: user.transmax,
        };
        ags.push(obj);
      });
      res.send(cryp.encryptobj(ags));
    } else {
      return res.status(400).send("Master Agents not found!");
    }
  })
);
//transfer to master agent
router.post(
  "/transtomastagent",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const datat = cryp.decryptobj(req.body.enc);
      if (datat !== "tberror") {
        const { error } = validate.transf(datat);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Agent.findOne({
          agentid: datat.agentid,
          type: "MasterAgent",
        });
        if (!userch) return res.status(400).send("Agent Not Found");
        else {
          var sendagent = await Agent.findOne({
            agentid: req.user.agentid,
          });

          if (datat.amount > 0) {
            const prkey = await rediscon.redisExistCheck(
              "AdminControls",
              "AdminControls"
            );
            if (prkey > 0) {
              const adm = await rediscon.redisGetData(
                "AdminControls",
                "AdminControls"
              );
              if (
                adm.supertransfer === "Enable" &&
                sendagent.transferstatus === "Enable"
              ) {
                if (
                  adm.transmin <= datat.amount &&
                  datat.amount <= adm.transmax
                ) {
                  if (sendagent.balance >= datat.amount) {
                    var obj = {
                      sender: req.user.agentid,
                      receiver: userch.agentid,
                      amount: datat.amount,
                      comment: datat.comment,
                      type: "Tranmast",
                    };

                    await rabitfunc.bullprocess(JSON.stringify(obj), 2);

                    res.send(
                      cryp.encryptobj({
                        success: "Your request processed successfully",
                      })
                    );
                  } else {
                    res.status(400).send("Insufficient Funds!!");
                  }
                } else {
                  res
                    .status(400)
                    .send(
                      `Amount should be in between ${sendagent.transmin} & ${sendagent.transmax}!!`
                    );
                }
              } else {
                res
                  .status(400)
                  .send("Transfer Disabled, Please try again after!!");
              }
            }
          } else {
            res.status(400).send("Please enter valid amount");
          }
        }
      }
    }
  })
);

// loginstatus change
router.post(
  "/malogstat",
  ratecut,
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Agent.findOne({
          agentid: data.agentid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.superagent === req.user.agentid) {
            if (usr.loginstatus === data.loginstatus) {
              return res
                .status(400)
                .send("Current user login status : " + `${usr.loginstatus}`);
            } else {
              await Agent.findOneAndUpdate(
                { agentid: data.agentid },
                { loginstatus: data.loginstatus }
              );
              winston.info(
                "Login Status of MasterAgent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.loginstatus +
                  " By SuperAgent:" +
                  req.user.email
              );
              await alert_Developers(
                "Login Status of MasterAgent: " +
                  usr.agentname +
                  " Changed to: " +
                  data.loginstatus +
                  " By SuperAgent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Master Agent Login Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change!!");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
router.post(
  "/matrstat",
  ratecut,
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Agent.findOne({
          agentid: data.agentid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.superagent === req.user.agentid) {
            if (usr.transferstatus === data.transferstatus) {
              return res
                .status(400)
                .send("Current user transfer status : " + `${usr.loginstatus}`);
            } else {
              await Agent.findOneAndUpdate(
                { agentid: data.agentid },
                { transferstatus: data.transferstatus }
              );
              winston.info(
                "Transfer Status of MasterAgent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.transferstatus +
                  " By SuperAgent:" +
                  req.user.email
              );
              await alert_Developers(
                "Transfer Status of MasterAgent: " +
                  usr.agentname +
                  " Changed to: " +
                  data.transferstatus +
                  " By SuperAgent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Master Agent Transfer Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change!!");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

//super agent change pwd of master
router.post(
  "/masuppwd",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.pwdup(data);
        if (error) return res.status(400).send(error.details[0].message);
        const ag = await Agent.findOne({
          agentid: data.agentid,
          type: "MasterAgent",
          superagent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("MasterAgent not Found");
        //password hashing
        const salt = await bcrypt.genSalt(10);
        var nwpwd = await bcrypt.hash(data.password, salt);

        //updating new password
        await Agent.updateOne(
          { agentid: data.agentid },

          { $set: { password: nwpwd } }
        );
        res.send(cryp.encryptobj({ success: "Password Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//update profile of master
router.post(
  "/msagnted",
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.edit(data);
        if (error) return res.status(400).send(error.details[0].message);
        data.email = tige.encrypt(data.email);

        const ag = await Agent.findOne({
          agentid: data.agentid,
          type: "MasterAgent",
          superagent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("MasterAgent not Found");
        await Agent.findOneAndUpdate(
          { agentid: data.agentid },
          {
            $set: {
              agentname: data.agentname,
              email: data.email,
            },
          }
        );
        res.send(cryp.encryptobj({ success: "Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

//cashout to admin
router.post(
  "/casousup",
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const datat = cryp.decryptobj(req.body.enc);
      if (datat !== "tberror") {
        const { error } = validate.caadmsu(datat);
        if (error) return res.status(400).send(error.details[0].message);
        else {
          var sendagent = await Agent.findOne({
            agentid: req.user.agentid,
            type: "SuperAgent",
          });
          if (sendagent) {
            if (datat.amount > 0) {
              const prkey = await rediscon.redisExistCheck(
                "AdminControls",
                "AdminControls"
              );
              if (prkey > 0) {
                const adm = await rediscon.redisGetData(
                  "AdminControls",
                  "AdminControls"
                );
                if (
                  adm.supertransfer === "Enable" &&
                  sendagent.transferstatus === "Enable"
                ) {
                  if (
                    adm.transmin <= datat.amount &&
                    datat.amount <= adm.transmax
                  ) {
                    if (sendagent.balance >= datat.amount) {
                      var obj = {
                        sender: req.user.agentid,
                        amount: datat.amount,
                        comment: datat.comment,
                        type: "Cashousuper",
                      };

                      await rabitfunc.bullprocess(JSON.stringify(obj), 3);

                      res.send(
                        cryp.encryptobj({
                          success: "Your request processed successfully",
                        })
                      );
                    } else {
                      res.status(400).send("Insufficient Funds!!");
                    }
                  } else {
                    res
                      .status(400)
                      .send(
                        `Amount should be in between ${sendagent.transmin} & ${sendagent.transmax}!!`
                      );
                  }
                } else {
                  res
                    .status(400)
                    .send("Transfer Disabled, Please try again after!!");
                }
              }
            } else {
              res.status(400).send("Please enter valid amount");
            }
          } else {
            return res.status(400).send("You are not allowed to Transfer!!");
          }
        }
      }
    }
  })
);
//cashout history
router.post(
  "/cashhist",
  cs,
  auth,
  amw(async (req, res) => {
    const trhist = await Cashout.find({
      agentid: req.user.agentid,
    })
      .sort({ date: -1 })
      .select({ _id: 0, __v: 0 });

    if (trhist.length <= 0)
      return res.status(400).send("Cashout history Not Found");
    else {
      res.send(cryp.encryptobj(trhist));
    }
  })
);

//----------------admin auth--------------------
// const AWS = require("aws-sdk");
// const s3buckname = config.get("s3buckname");
// const s3 = new AWS.S3({
//   accessKeyId: config.get("s3bukkey"),
//   secretAccessKey: config.get("s3seckey"),
// });

// Add Admin controls
router.post("/addcontrols", async (req, res) => {
  const data = req.body;
  const obj = {
    register: "Enable",
    userlogin: "Enable",
    superlogin: "Enable",
    masterlogin: "Enable",
    agentlogin: "Enable",
    bet: "Enable",
    usertransfer: "Enable",
    supertransfer: "Enable",
    masterransfer: "Enable",
    agenttransfer: "Enable",
    kycmandatory: "True",
    gameadd: "Enable",
    operatorcomm: 5,
    supercomm: 1,
    mastercomm: 1,
    agentcomm: 1,
    betmin: 10,
    betmax: 5000,
    tansmin: 1000,
    transmax: 1000000,
  };
  const admincont = await new Admicontrol(obj);
  await admincont.save();

  await rediscon.AdminControls();
  res.send("Admin controls added");
});
//get admin controls
router.post(
  "/getadmcntl",
  cs,
  [auth, admin],
  amw(async (req, res) => {
    if (req.user.type === 1) {
      const admin = await Admicontrol.findOne({}).select({ _id: 0, __v: 0 });
      if (!admin) return res.status(400).send("Admin Controls not found");
      else {
        res.send(cryp.encryptobj({ success: admin }));
      }
    } else {
      res.status(400).send("Invalid User Type..");
    }
  })
);

//edit admin controls
router.post(
  "/endis",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    if (req.user.type === 1) {
      const { error } = await validate.getenc(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      else {
        const data = cryp.decryptobj(req.body.enc);
        if (data !== "tberror") {
          var upd = await Admicontrol.updateOne({
            [`${data.name}`]: data.value,
          });

          await rediscon.AdminControls();

          winston.info(
            `${data.name}` + " : " + data.value + " By " + req.user.email
          );
          await alert_Developers(
            `${data.name}` + " : " + data.value + " Changed By " + req.user.name
          );

          res.send(cryp.encryptobj({ success: "Success" }));
        }
      }
    } else {
      res.status(400).send("Invalid User Type..");
    }
  })
);
//get all user list
router.post(
  "/getusers",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const users = await Register.find({})
          .select({
            __v: 0,
            _id: 0,
          })
          .sort({ date: -1 });
        const skip = Number(data.skip);
        if (users.length <= skip) {
          var arr = [];
          res.status(200).send(cryp.encryptobj({ success: arr }));
        } else {
          const usersn = await Register.find({})
            .limit(100)
            .skip(skip)
            .sort({ _id: -1 });
          if (usersn.length <= 0)
            return res.status(400).send("Users Not Found");
          else {
            var usrs = [];
            await usersn.forEach((ele) => {
              var obj = {
                date: ele.date,
                userid: ele.userid,
                username: ele.username,
                balance: ele.balance,
                betstatus: ele.betstatus,
                status: ele.status,
                loginstatus: ele.loginstatus,
                transferstatus: ele.transferstatus,
                usertype: ele.usertype,
                info: ele.info,
                kycstatus: ele.kycstatus,
                referral: ele.referral,
                refname: ele.refname,
                agent: ele.agent,
                masteragent: ele.masteragent,
              };
              usrs.push(obj);
            });
            res.send(cryp.encryptobj(usrs));
          }
        }
      }
    }
  })
);
//get single user by userid/username
router.post(
  "/userget",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const user = await Register.findOne({
          $or: [{ userid: data.userid }, { username: data.userid }],
        }).select({
          __v: 0,
          _id: 0,
        });
        if (user) {
          var obj = {
            date: user.date,
            userid: user.userid,
            username: user.username,
            balance: user.balance,
            betstatus: user.betstatus,
            loginstatus: user.loginstatus,
            transferstatus: user.transferstatus,
            status: user.status,
            usertype: user.usertype,
            refname: user.refname,
            referral: user.referral,
            agent: user.agent,
            kycstatus: user.kycstatus,
            info: user.info,
            masteragent: user.masteragent,
          };
          res.send(cryp.encryptobj(obj));
        } else {
          return res.status(400).send("User Not Found");
        }
      }
    }
  })
);

// delete user by userid
router.post(
  "/delusr",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({ userid: data.userid });
        if (!usr) return res.status(400).send("No User Found");
        else {
          await Register.deleteOne({ userid: data.userid });
          await History.deleteMany({ userid: data.userid });
          winston.info(
            "User: " + usr.username + " Deleted By Admin:" + req.user.email
          );
          await alert_Developers(
            "User: " + usr.username + " Deleted By Admin:" + req.user.name
          );
          res.send(cryp.encryptobj({ success: "User Deleted Successfully" }));
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

// change user loginstatus
router.post(
  "/userstat",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({ userid: data.userid });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.loginstatus === data.loginstatus) {
            return res
              .status(400)
              .send("Current user login status : " + `${usr.loginstatus}`);
          } else {
            await Register.findOneAndUpdate(
              { userid: data.userid },
              { loginstatus: data.loginstatus }
            );
            winston.info(
              "Login status of user: " +
                usr.username +
                " Changed to: " +
                data.loginstatus +
                " By Admin:" +
                req.user.email
            );
            await alert_Developers(
              "Login status of user: " +
                usr.username +
                " Changed to: " +
                data.loginstatus +
                " By Admin:" +
                req.user.name
            );
            res.send(
              cryp.encryptobj({
                success: "User Login Status updated Successfully",
              })
            );
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
// change user transfer status
router.post(
  "/usertrans",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({ userid: data.userid });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.transferstatus === data.transferstatus) {
            return res
              .status(400)
              .send(
                "Current user transfer status : " + `${usr.transferstatus}`
              );
          } else {
            await Register.findOneAndUpdate(
              { userid: data.userid },
              { transferstatus: data.transferstatus }
            );
            winston.info(
              "User: " +
                usr.username +
                " Transfer Status Changed to: " +
                data.transferstatus +
                " By Admin:" +
                req.user.email
            );
            await alert_Developers(
              "User: " +
                usr.username +
                " Transfer Status Changed to: " +
                data.transferstatus +
                " By Admin:" +
                req.user.name
            );
            res.send(
              cryp.encryptobj({
                success: "User Transfer Status updated Successfully",
              })
            );
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//change user bet status
router.post(
  "/userbetstat",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({ userid: data.userid });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.betstatus === data.betstatus) {
            return res
              .status(400)
              .send("Current user transfer status : " + `${usr.betstatus}`);
          } else {
            await Register.findOneAndUpdate(
              { userid: data.userid },
              { betstatus: data.betstatus }
            );
            winston.info(
              "User: " +
                usr.username +
                " Bet Status Changed to: " +
                data.betstatus +
                " By Admin:" +
                req.user.email
            );
            await alert_Developers(
              "User: " +
                usr.username +
                " Bet Status Changed to: " +
                data.betstatus +
                " By Admin:" +
                req.user.name
            );
            res.send(
              cryp.encryptobj({
                success: "User Bet Status updated Successfully",
              })
            );
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

// get adminlist
router.post("/adminlist", cs, [auth, admin], ratecut, async (req, res) => {
  if (req.user.type === 1) {
    const ad = await AdminReg.find({}).sort({ _id: -1 }).select({
      __v: 0,
      password: 0,
      _id: 0,
    });
    if (ad.length <= 0) return res.status(400).send("Admins Not Found");
    var list = [];
    await ad.forEach((ele) => {
      var obj = {
        date: ele.date,
        adminid: ele.adminid,
        name: ele.name,
        email: tige.decrypt(ele.email),
        type: ele.type,
        status: ele.status,
      };
      list.push(obj);
    });
    res.send(cryp.encryptobj(list));
  } else {
    res.status(400).send("Invalid Admin Type");
  }
});

// get operatorlist
router.post("/operlist", cs, [auth, admin], ratecut, async (req, res) => {
  if (req.user.type === 1) {
    const ad = await Operator.find({}).sort({ date: -1 }).select({
      __v: 0,
      password: 0,
      _id: 0,
    });
    if (ad.length <= 0) return res.status(400).send("Operator Not Found");
    var list = [];
    await ad.forEach((ele) => {
      var obj = {
        date: ele.date,
        opid: ele.opid,
        name: ele.name,
        email: tige.decrypt(ele.email),
        type: ele.type,
        status: ele.status,
        arenaid: ele.arenaid,
        arenaname: ele.arenaname,
      };
      list.push(obj);
    });
    res.send(cryp.encryptobj(list));
  } else {
    res.status(400).send("Invalid Admin Type");
  }
});
//delete admin
router.post(
  "/deladmin",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);

      if (data !== "tberror") {
        const usr = await AdminReg.findOne({ adminid: data.adminid });
        if (!usr) return res.status(400).send("No User Found");
        else {
          await AdminReg.deleteOne({ adminid: data.adminid });
          winston.info(
            "Admin: " +
              tige.decrypt(usr.email) +
              " Deleted By Admin:" +
              req.user.email
          );
          await alert_Developers(
            "Admin: " + usr.name + " Deleted By Admin:" + req.user.name
          );
          res.send(cryp.encryptobj({ success: "Admin Deleted Successfully" }));
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//stats
router.post(
  "/getstat",
  cs,
  [auth, admin],
  amw(async (req, res) => {
    var sta = await Stat.find({}).sort({ _id: -1 }).select({
      _id: 0,
      __v: 0,
    });
    if (sta.length > 0) {
      res.send(cryp.encryptobj(sta));
    } else {
      res.status(400).send("Stats Not Found");
    }
  })
);
//pending kyc applications
router.post(
  "/pendkyclist",
  cs,
  [auth, admin],
  amw(async (req, res) => {
    const users = await Register.find({ kycstatus: "Under-Approval" })
      .select({
        userid: 1,
        username: 1,
        kycstatus: 1,
        info: 1,
      })
      .sort({ _id: -1 });
    if (users.length > 0) {
      res.send(cryp.encryptobj(users));
    } else {
      return res.status(400).send("No Users Found");
    }
  })
);
// user kyc apporve
router.post(
  "/kycaprv",
  cs,
  [auth, admin],
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const user = await Register.findOne({ userid: data.userid });
        if (!user) return res.status(400).send("User not found");
        else {
          if (data.kycstatus === "Verified") {
            await Register.findOneAndUpdate(
              { userid: data.userid },
              { kycstatus: "Verified" }
            );
            winston.info(
              "KYC Status of user:" +
                data.userid +
                " Verified By Admin:" +
                req.user.email
            );
            res.send(cryp.encryptobj({ success: "Kyc approved succesfully" }));
          } else {
            await Register.findOneAndUpdate(
              { userid: data.userid },
              { info: {}, kycstatus: "Rejected" }
            );
            winston.info(
              "KYC Status of user:" +
                data.userid +
                " Rejected By Admin:" +
                req.user.email
            );
            res.send(cryp.encryptobj({ success: "Kyc rejected succesfully" }));
          }
        }
      }
    }
  })
);
router.post(
  "/linkuplod",
  [auth, admin],
  amw(async (req, res) => {
    if (req.user.type === 1) {
      const { error } = await validate.getenc(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      else {
        const data = cryp.decryptobj(req.body.enc);
        if (data !== "tberror") {
          if (data.linkurl) {
            await rediscon.linkupload(data.linkurl);
            res.send(
              cryp.encryptobj({
                success: "Live Video Link Uploded Successfully",
              })
            );
          } else {
            res.status(400).send("Please Upload Video Link!!");
          }
        }
      }
    } else {
      res.status(400).send("Invalid Admin Type");
    }
  })
);
router.post("/upredis", async (req, res) => {
  await rediscon.getGames();
  await rediscon.AdminControls();
  await rediscon.Arena();
  await rediscon.Sabong();
  await rediscon.lastfight();
  await rediscon.queue();
  const users = await Register.find({});
  await users.forEach(async (e) => {
    await rediscon.userprofile(e.username);
    await rediscon.userBets(e.userid);
  });
  setTimeout(() => {
    res.send("Success");
  }, 5000);
});

module.exports = router;

//-----------env
db =
  "mongodb+srv://Sarimonak:Sarimonak@sarimonak.xexwg.mongodb.net/Sarimonak?retryWrites=true&w=majority";
DBUSERNAME = "Sarimonak";
DBPASSWORD = "Sarimonak";
DBCOLLECTION = "Sarimonak";
CRYPTOPASS = "thisisSaRIMONAKpassdcantbedecrypted";
CRYPTOSALT = "thisiSaRIMONAKsalthatisencrypted";
JWTPRIVATEKEY = "PrivateKeySARIMONAK";
PORT = 4000;
REDIS_URL = "redis://redis-16653.c8.us-east-1-3.ec2.cloud.redislabs.com:16653";
REDIS_PASSWORD = "p8myZUhiyAOj0pZg4KrVLTKy3BTFkl8E";
//---------admin agents----------
// //admin change pwd of superagent
// router.post(
//   "/supuppwd",
//   cs,
//   [auth, admin],
//   ratecut,
//   amw(async (req, res) => {
//     if (req.user.type === 1) {
//       const { error } = await validate.getenc(req.body);
//       if (error) return res.status(400).send(error.details[0].message);
//       else {
//         const data = crypto.decryptobj(req.body.enc);
//         if (data !== "tberror") {
//           const { error } = validate.pwdup(data);
//           if (error) return res.status(400).send(error.details[0].message);
//           const ag = await Agent.findOne({
//             agentid: data.agentid,
//             type: "SuperAgent",
//           });
//           if (!ag) return res.status(400).send("SuperAgent not Found");
//           //password hashing

//           const salt = await bcrypt.genSalt(10);
//           var nwpwd = await bcrypt.hash(data.password, salt);

//           //updating new password
//           await Agent.updateOne(
//             { agentid: data.agentid },

//             { $set: { password: nwpwd } }
//           );

//           res.send(
//             crypto.encryptobj({ success: "Password Updated Successfully" })
//           );
//         } else {
//           return res.status(400).send("Invalid Parameters");
//         }
//       }
//     } else {
//       return res.status(400).send("Invalid Admin Type..");
//     }
//   })
// );

// //get master agent list
// router.post(
//   "/masterlist",
//   cs,
//   [auth, admin],
//   amw(async (req, res) => {
//     const supeag = await Agent.find({ type: "MasterAgent" }).sort({ date: -1 });
//     if (!supeag) return res.status(400).send("Master Agents list not found");
//     else {
//       var usrs = [];
//       await supeag.forEach((ele) => {
//         var obj = {
//           date: ele.date,
//           email: tige.decrypt(ele.email),
//           agentid: ele.agentid,
//           agentname: ele.agentname,
//           type: ele.type,
//           status: ele.status,
//           arena: ele.arena,
//           balance: ele.balance,
//           superagent: ele.superagent,
//           masteragent: ele.masteragent,
//           agent: ele.agent,
//           loginstatus: ele.loginstatus,
//           transferstatus: ele.transferstatus,
//         };
//         usrs.push(obj);
//       });
//       res.send(crypto.encryptobj(usrs));
//     }
//   })
// );
// //get agent list
// router.post(
//   "/agentlist",
//   cs,
//   [auth, admin],
//   amw(async (req, res) => {
//     const supeag = await Agent.find({ type: "Agent" }).sort({ date: -1 });
//     if (!supeag) return res.status(400).send("Agents list not found");
//     else {
//       var usrs = [];
//       await supeag.forEach((ele) => {
//         var obj = {
//           date: ele.date,
//           email: tige.decrypt(ele.email),
//           agentid: ele.agentid,
//           agentname: ele.agentname,
//           type: ele.type,
//           status: ele.status,
//           arena: ele.arena,
//           balance: ele.balance,
//           superagent: ele.superagent,
//           masteragent: ele.masteragent,
//           agent: ele.agent,
//           loginstatus: ele.loginstatus,
//           transferstatus: ele.transferstatus,
//         };
//         usrs.push(obj);
//       });
//       res.send(crypto.encryptobj(usrs));
//     }
//   })
// );
// //get count
// router.post(
//   "/count",
//   cs,
//   [auth, admin],
//   ratecut,
//   amw(async (req, res) => {
//     const supag = await Agent.find({
//       type: "SuperAgent",
//     }).countDocuments();
//     const mast = await Agent.find({
//       type: "MasterAgent",
//     }).countDocuments();
//     const agent = await Agent.find({
//       type: "Agent",
//     }).countDocuments();
//     const user = await Register.find({
//       type: "User",
//     }).countDocuments();

//     res.send(
//       crypto.encryptobj({
//         superag: supag,
//         masters: mast,
//         agents: agent,
//         user: user,
//       })
//     );
//   })
// );
// //transfer to super agent
// router.post(
//   "/transuper",
//   cs,
//   [auth, admin],
//   amw(async (req, res) => {
//     if (req.user.type === 1) {
//       const { error } = await validate.getenc(req.body);
//       if (error) return res.status(400).send(error.details[0].message);
//       else {
//         const data = crypto.decryptobj(req.body.enc);
//         if (datat !== "tberror") {
//           const { error } = validate.transf(datat);
//           if (error) return res.status(400).send(error.details[0].message);
//           const userch = await Agent.findOne({
//             agentid: datat.agentid,
//           });
//           if (!userch) return res.status(400).send("SuperAgent Not Found");
//           else {
//             if (datat.amount > 0) {
//               const bool = await rediscon.redisExistCheck(
//                 "AdminControls",
//                 "AdminControls"
//               );
//               if (bool > 0) {
//                 const adm = await rediscon.redisGetData(
//                   "AdminControls",
//                   "AdminControls"
//                 );
//                 if (adm.supertransfer === "Enable") {
//                   if (
//                     adm.transmin <= datat.amount &&
//                     datat.amount <= adm.transmax
//                   ) {
//                     var obj = {
//                       sender: req.user.adminid,
//                       receiver: userch.agentid,
//                       amount: datat.amount,
//                       comment: datat.comment,
//                       type: "Transuper",
//                     };
//                     await rabitfunc.bullprocess(JSON.stringify(obj), 2);

//                     res.send(
//                       crypto.encryptobj({
//                         success: "Your request processed successfully",
//                       })
//                     );
//                   } else {
//                     res
//                       .status(400)
//                       .send(
//                         `Amount should be in between ${adm.transmin} & ${adm.transmax}!!`
//                       );
//                   }
//                 } else {
//                   res
//                     .status(400)
//                     .send(
//                       "Transfer Disable by Admin, Please try again after!!"
//                     );
//                 }
//               }
//             } else {
//               res.status(400).send("Please enter valid amount");
//             }
//           }
//         }
//       }
//     } else {
//       res.status(400).send("Invalid User Type..");
//     }
//   })
// );
// //get all tarnsfer history
// router.post(
//   "/gettranshist",
//   cs,
//   auth,
//   amw(async (req, res) => {
//     if (req.user.type === 1) {
//       const trhist = await Transfer.find({})
//         .sort({ _id: -1 })
//         .select({ _id: 0, __v: 0 })
//         .limit(100);
//       if (trhist.length <= 0)
//         return res.status(400).send("Transfer history Not Found");
//       else {
//         res.send(crypto.encryptobj(trhist));
//       }
//     } else {
//       res.status(400).send("Invalid User Type..");
//     }
//   })
// );
// //get all ref history
// router.post(
//   "/getrefhist",
//   cs,
//   auth,
//   amw(async (req, res) => {
//     if (req.user.type === 1) {
//       const trhist = await Refhistory.find({})
//         .sort({ _id: -1 })
//         .select({ _id: 0, __v: 0 })
//         .limit(100);
//       if (trhist.length <= 0)
//         return res.status(400).send("Referral commission history Not Found");
//       else {
//         res.send(crypto.encryptobj(trhist));
//       }
//     } else {
//       res.status(400).send("Invalid User Type..");
//     }
//   })
// );

// // change login Status of agent by agentid
// router.post(
//   "/logstachg",
//   cs,
//   [auth, admin],
//   ratecut,
//   amw(async (req, res) => {
//     const { error } = await validate.getenc(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     else {
//       const data = crypto.decryptobj(req.body.enc);
//       if (data !== "tberror") {
//         const ag = await Agent.findOne({
//           agentid: data.agentid,
//         });
//         if (!ag) return res.status(400).send("Agent not Found");
//         if (req.user.type === 1) {
//           if (ag.loginstatus === data.loginstatus) {
//             return res
//               .status(400)
//               .send("Current login Status : " + `${ag.loginstatus}`);
//           } else {
//             await Agent.findOneAndUpdate(
//               { agentid: data.agentid },
//               { loginstatus: data.loginstatus }
//             );
//           }
//           winston.info(
//             "Login Status of Agent: " +
//               tige.decrypt(ag.email) +
//               " Changed to: " +
//               data.loginstatus +
//               " By Admin:" +
//               req.user.name
//           );
//           await alert_Developers(
//             "Login Status of Agent: " +
//               tige.decrypt(ag.email) +
//               " Changed to: " +
//               data.loginstatus +
//               " By Admin:" +
//               req.user.name
//           );
//           res.send(
//             crypto.encryptobj({ success: "Login Status Updated Successfully" })
//           );
//         } else {
//           return res.status(400).send("You are not Allowed to Change Status");
//         }
//       } else {
//         return res.status(400).send("Invalid Parameters");
//       }
//     }
//   })
// );
// // change transfer Status of agents
// router.post(
//   "/agtranschg",
//   cs,
//   [auth, admin],
//   ratecut,
//   amw(async (req, res) => {
//     const { error } = await validate.getenc(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     else {
//       const data = crypto.decryptobj(req.body.enc);

//       if (data !== "tberror") {
//         const ag = await Agent.findOne({
//           agentid: data.agentid,
//         });
//         if (!ag) return res.status(400).send("Agent not Found");
//         if (req.user.type === 1) {
//           if (ag.transferstatus === data.transferstatus) {
//             return res
//               .status(400)
//               .send("Current transfer Status : " + `${ag.transferstatus}`);
//           } else {
//             await Agent.findOneAndUpdate(
//               { agentid: data.agentid },
//               { transferstatus: data.transferstatus }
//             );
//           }
//           winston.info(
//             "Transfer Status of Agent: " +
//               tige.decrypt(ag.email) +
//               " Changed to: " +
//               data.transferstatus +
//               " By Admin:" +
//               req.user.name
//           );
//           await alert_Developers(
//             "Transfer Status of Agent: " +
//               tige.decrypt(ag.email) +
//               " Changed to: " +
//               data.transferstatus +
//               " By Admin:" +
//               req.user.name
//           );
//           res.send(
//             crypto.encryptobj({
//               success: "Transfer Status Updated Successfully",
//             })
//           );
//         } else {
//           return res.status(400).send("You are not Allowed to Change Status");
//         }
//       } else {
//         return res.status(400).send("Invalid Parameters");
//       }
//     }
//   })
// );

// //agent---ref history by agentid
// router.post(
//   "/refhistbyid",
//   cs,
//   auth,
//   amw(async (req, res) => {
//     const { error } = await validate.getenc(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     else {
//       const data = crypto.decryptobj(req.body.enc);
//       if (data !== "tberror") {
//         const usrg = await Agent.findOne({ agentid: data.agentid });
//         if (!usrg) return res.status(400).send("Agent not found");
//         else {
//           if (req.user.type === 1) {
//             const refhist1 = await Refhistory.find({
//               agentid: data.agentid,
//             }).sort({
//               _id: -1,
//             });
//             const skip = Number(data.skip);
//             if (refhist1.length <= skip) {
//               var arr = [];
//               res.status(200).send(crypto.encryptobj(arr));
//             } else {
//               const refhist = await Refhistory.find({ agentid: data.agentid })
//                 .limit(100)
//                 .skip(skip)
//                 .sort({ _id: -1 });
//               if (refhist.length <= 0)
//                 return res.status(400).send("Commission history Not Found");
//               else {
//                 var arr = [];
//                 await refhist.forEach((e) => {
//                   var obj = {
//                     userid: e.userid,
//                     email: e.email,
//                     username: e.username,
//                     master: e.master,
//                     agent: e.agent,
//                     fromusername: e.fromusername,
//                     fromuserid: e.fromuserid,
//                     gameid: e.gameid,
//                     amount: e.amount,
//                     hid: e.hid,
//                     betid: e.betid,
//                     date: e.date,
//                     comment: e.comment,
//                     status: e.status,
//                     type: e.type,
//                   };
//                   arr.push(obj);
//                 });
//                 res.send(crypto.encryptobj(arr));
//               }
//             }
//           } else {
//             return res.status(400).send("Invalid Request");
//           }
//         }
//       }
//     }
//   })
// );
// //agent ---- transfer hist by id
// router.post(
//   "/transhistbyid",
//   cs,
//   auth,
//   amw(async (req, res) => {
//     const { error } = await validate.getenc(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     else {
//       const data = crypto.decryptobj(req.body.enc);
//       if (data !== "tberror") {
//         const usrg = await Agent.findOne({ agentid: data.agentid });
//         if (!usrg) return res.status(400).send("Agent not found");
//         else {
//           if (req.user.type === 1) {
//             const thist1 = await Transfer.find({
//               userid: data.agentid,
//             }).sort({
//               _id: -1,
//             });
//             const skip = Number(data.skip);
//             if (thist1.length <= skip) {
//               var arr = [];
//               res.status(200).send(crypto.encryptobj(arr));
//             } else {
//               const trhist = await Transfer.find({
//                 userid: data.agentid,
//               })
//                 .select({ _id: 0, __v: 0 })
//                 .limit(100)
//                 .skip(skip)
//                 .sort({ date: -1 });
//               if (trhist.length <= 0)
//                 return res.status(400).send("Transfer history Not Found");
//               else {
//                 res.send(crypto.encryptobj(trhist));
//               }
//             }
//           } else {
//             return res.status(400).send("Invalid Request");
//           }
//         }
//       }
//     }
//   })
// );
// //cashout history
// router.post(
//   "/cashhist",
//   cs,
//   auth,
//   amw(async (req, res) => {
//     const trhist = await Cashout.find({})
//       .sort({ date: -1 })
//       .select({ _id: 0, __v: 0 })
//       .limit(100);
//     if (trhist.length <= 0)
//       return res.status(400).send("Cashout history Not Found");
//     else {
//       res.send(crypto.encryptobj(trhist));
//     }
//   })
// );
// //change cashout status
// router.post(
//   "/changcosta",
//   cs,
//   auth,
//   amw(async (req, res) => {
//     if (req.user.type === 1) {
//       const { error } = await validate.getenc(req.body);
//       if (error) return res.status(400).send(error.details[0].message);
//       else {
//         const data = crypto.decryptobj(req.body.enc);
//         if (data !== "tberror") {
//           const usrg = await Cashout.findOne({
//             hid: data.hid,
//           });
//           if (!usrg) return res.status(400).send("Cashout Request not found");
//           else {
//             if (usrg.status === "Un-Paid") {
//               await Cashout.findOneAndUpdate(
//                 {
//                   hid: data.hid,
//                 },
//                 { status: data.status, admcomment: data.admcomment }
//               );
//               res.send(crypto.encryptobj({ success: "Paid successfully" }));
//             } else {
//               res.status(400).send("Already Paid to SuperAgent");
//             }
//           }
//         }
//       }
//     } else {
//       return res.status(400).send("Invalid Request");
//     }
//   })
// );
// //
// // router.post("/addpro", async (req, res) => {
// //   const agent = await Admicontrol.updateMany(
// //     {},
// //     { $set: { kycmandatory: "False" } }
// //   );
// //   await rediscon.AdminControls();
// //   res.send("success");
// // });
// router.post("/addpro", async (req, res) => {
//   // const agent = await Register.updateMany(
//   //   {},
//   //   { $set: { transmin: 10, transmax: 1000000 } }
//   // );
//   var msg = req.body;
//   if (msg !== null) {
//     const type = msg.type;
//     if (type === "BetGame") {
//       proce.betGame(msg);
//     } else if (type === "PrizeAdd") {
//       proce.prizeAdd(msg);
//     } else if (type === "RefundAdd") {
//       proce.refundAdd(msg);
//     } else if (type === "RefComm") {
//       proce.refcommAdd(msg);
//     } else if (type === "Transuper") {
//       proce.tranSuper(msg);
//     } else if (type === "Tranmast") {
//       proce.tranMaster(msg);
//     } else if (type === "Tranuser") {
//       proce.tranUser(msg);
//     } else if (type === "Transtouser") {
//       proce.tranusrtoUser(msg);
//     } else if (type === "Cashousuper") {
//       proce.cashoutSuper(msg);
//     } else if (type === "Cashouagent") {
//       proce.cashouAgent(msg);
//     } else if (type === "Cashouuser") {
//       proce.cashoutUser(msg);
//     } else if (type === "CancelRefundAdd") {
//       proce.cancelrefundAdd(msg);
//     }
//   }

//   res.send("success");
// });

// router.post("/rfcom", async (req, res) => {
//   var data = req.body;
//   refcom.refcomadd();
//   res.send("Success");
// });
//------------------------------------------master agent-----------------
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const validate = require("../helpers/validations");
const cryp = require("../middleware/balm");
const auth = require("../middleware/auth");
const ratecut = require("../middleware/ratecutter");

const { Register } = require("../models/register");
const winston = require("winston");
const { alert_Developers, oneWaySMS } = require("../helpers/telegram");

const amw = require("../middleware/async");
const tige = require("../middleware/tigerbalm");
const rediscon = require("../redis/rediscon");
const jwt = require("jsonwebtoken");
const gensalt = require("../middleware/genid");
const config = require("config");
const { Agent } = require("../models/admin/agent");
const { Transfer } = require("../models/transfer");
const rabitfunc = require("../helpers/rabitserver");
const cs = require("../middleware/csrf");

//reg masteragent
router.post(
  "/mastag",
  ratecut,
  cs,
  auth,
  amw(async (req, res) => {
    if (req.user.type === "SuperAgent") {
      const { error } = await validate.getenc(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      else {
        const datat = cryp.decryptobj(req.body.enc);
        if (datat !== "tberror") {
          var email = tige.encrypt(datat.email);
          const userch = await Agent.findOne({
            email: email,
          });
          if (userch)
            return res.status(400).send("Masteragent already Registered.");
          else {
            const { error } = validate.agtreg(datat);
            if (error) return res.status(400).send(error.details[0].message);

            // generating unique id
            var agtid = gensalt("CXMAG");
            const allusers = await Agent.findOne({ agentid: agtid });
            if (allusers) {
              var newadmid = gensalt("CXMAG");
              datat.agentid = newadmid;
            } else {
              datat.agentid = agtid;
            }
            const salt = await bcrypt.genSalt(10);
            var password = await bcrypt.hash(datat.password, salt);
            datat.password = password;
            datat.email = email;
            datat.type = "MasterAgent";

            var refuser = await Agent.findOne({
              agentid: datat.referral,
            });
            if (refuser) {
              if (refuser.type === "SuperAgent") {
                datat.superagent = refuser.agentid;
                datat.arena = refuser.arena;
                datat.refname = refuser.agentname;
                datat.referral = refuser.agentid;
                const prkey = await rediscon.redisExistCheck(
                  "AdminControls",
                  "AdminControls"
                );
                if (prkey > 0) {
                  const adm = await rediscon.redisGetData(
                    "AdminControls",
                    "AdminControls"
                  );
                  datat.transmin = adm.transmin;
                  datat.transmax = adm.transmax;
                }

                const usern = await new Agent(datat);
                await usern.save();

                await alert_Developers(
                  "New MasterAgent Added:\n Email: " +
                    tige.decrypt(datat.email) +
                    "\nName: " +
                    datat.agentname +
                    "\nBy Super Agent: " +
                    req.user.agentname
                );
                winston.info(
                  "New MasterAgent Added:\n Email: " +
                    tige.decrypt(datat.email) +
                    "\nName: " +
                    datat.agentname +
                    "\nBy Super Agent: " +
                    req.user.email
                );
                res.send(
                  cryp.encryptobj({
                    success: "Master Agent Registered Successfully",
                  })
                );
              } else {
                return res.status(400).send("Referral is not SuperAgent");
              }
            } else {
              return res.status(400).send("Referral User not Found");
            }
          }
        }
      }
    } else {
      res.status(400).send("Invalid Agent Type..");
    }
  })
);

//master profile
router.post(
  "/mastprofile",
  cs,
  auth,
  amw(async (req, res) => {
    const user = await Agent.findOne({ agentid: req.user.agentid });
    if (!user) return res.status(400).send("MasterAgent not Found");
    else {
      var agli = 0;
      const supag = await Agent.find({
        masteragent: req.user.agentid,
        type: "Agent",
      }).countDocuments();
      const list = await Agent.find({
        masteragent: req.user.agentid,
        type: "Agent",
      });
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        const age = await Register.find({
          agent: e.agentid,
          type: "User",
        }).countDocuments();
        agli = agli + age;
      }

      var obj = {
        agentid: user.agentid,
        date: user.date,
        agentname: user.agentname,
        email: tige.decrypt(user.email),
        balance: user.balance,
        arena: user.arena,
        status: user.status,
        type: user.type,
        superagent: user.superagent,
        masteragent: user.masteragent,
        agent: user.agent,
        loginstatus: user.loginstatus,
        transferstatus: user.transferstatus,
        transmin: user.transmin,
        transmax: user.transmax,
        referral: user.referral,
        refname: user.refname,
        agentcount: supag,
        usercount: agli,
      };
      res.send(cryp.encryptobj(obj));
    }
  })
);
//Agent list
router.post(
  "/getagents",
  cs,
  auth,
  amw(async (req, res) => {
    const ag = await Agent.find({
      masteragent: req.user.agentid,
      type: "Agent",
    }).sort({ _id: -1 });
    if (ag && ag.length > 0) {
      var ags = [];
      await ag.forEach((user) => {
        var obj = {
          agentid: user.agentid,
          date: user.date,
          agentname: user.agentname,
          email: tige.decrypt(user.email),
          balance: user.balance,
          arena: user.arena,
          status: user.status,
          loginstatus: user.loginstatus,
          transferstatus: user.transferstatus,
          type: user.type,
          superagent: user.superagent,
          masteragent: user.masteragent,
          agent: user.agent,
          referral: user.referral,
          refname: user.refname,
        };
        ags.push(obj);
      });
      res.send(cryp.encryptobj(ags));
    } else {
      return res.status(400).send("Agents not found!");
    }
  })
);

//transfer to agent
router.post(
  "/transtoagent",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const datat = cryp.decryptobj(req.body.enc);
      if (datat !== "tberror") {
        const { error } = validate.transf(datat);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Agent.findOne({
          agentid: datat.agentid,
          type: "Agent",
        });
        if (!userch) return res.status(400).send("Agent Not Found");
        else {
          var sendagent = await Agent.findOne({ agentid: req.user.agentid });
          if (datat.amount > 0) {
            const prkey = await rediscon.redisExistCheck(
              "AdminControls",
              "AdminControls"
            );
            if (prkey > 0) {
              const adm = await rediscon.redisGetData(
                "AdminControls",
                "AdminControls"
              );
              if (
                adm.mastertransfer === "Enable" &&
                sendagent.transferstatus === "Enable"
              ) {
                if (
                  adm.transmin <= datat.amount &&
                  datat.amount <= adm.transmax
                ) {
                  if (sendagent.balance >= datat.amount) {
                    var obj = {
                      sender: req.user.agentid,
                      receiver: userch.agentid,
                      amount: datat.amount,
                      comment: datat.comment,
                      type: "Tranmast",
                    };
                    await rabitfunc.bullprocess(JSON.stringify(obj), 2);

                    res.send(
                      cryp.encryptobj({
                        success: "Amount Transferred successfully",
                      })
                    );
                  } else {
                    res.status(400).send("Insufficient Funds!!");
                  }
                } else {
                  res
                    .status(400)
                    .send(
                      `Amount should be in between ${sendagent.transmin} & ${sendagent.transmax}!!`
                    );
                }
              } else {
                res
                  .status(400)
                  .send("Transfer Disabled , Please try again after!!");
              }
            }
          } else {
            res.status(400).send("Please enter valid amount");
          }
        }
      }
    }
  })
);
//agent login status
router.post(
  "/aglogstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Agent.findOne({
          agentid: data.agentid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.masteragent === req.user.agentid) {
            if (usr.loginstatus === data.loginstatus) {
              return res
                .status(400)
                .send("Current agent login status : " + `${usr.loginstatus}`);
            } else {
              await Agent.findOneAndUpdate(
                { agentid: data.agentid },
                { loginstatus: data.loginstatus }
              );
              winston.info(
                "Login Status of Agent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.loginstatus +
                  " By MasterAgent:" +
                  req.user.email
              );
              await alert_Developers(
                "Login Status of Agent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.loginstatus +
                  " By MasterAgent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Agent Login Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//transfer status
router.post(
  "/agtrstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Agent.findOne({
          agentid: data.agentid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.masteragent === req.user.agentid) {
            if (usr.transferstatus === data.transferstatus) {
              return res
                .status(400)
                .send("Current user transfer status : " + `${usr.loginstatus}`);
            } else {
              await Agent.findOneAndUpdate(
                { agentid: data.agentid },
                { transferstatus: data.transferstatus }
              );
              winston.info(
                "Transfer Status of Agent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.transferstatus +
                  " By MasterAgent:" +
                  req.user.email
              );
              await alert_Developers(
                "Transfer Status of Agent: " +
                  usr.agentname +
                  " Changed to: " +
                  data.transferstatus +
                  " By MasterAgent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Agent Transfer Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change!!");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//master agent change pwd of agent
router.post(
  "/aguppwd",
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.pwdup(data);
        if (error) return res.status(400).send(error.details[0].message);
        const ag = await Agent.findOne({
          agentid: data.agentid,
          type: "Agent",
          masteragent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("Agent not Found");
        //password hashing
        const salt = await bcrypt.genSalt(10);
        var nwpwd = await bcrypt.hash(data.password, salt);

        //updating new password
        await Agent.updateOne(
          { agentid: data.agentid },

          { $set: { password: nwpwd } }
        );
        res.send(cryp.encryptobj({ success: "Password Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//update profile of agent
router.post(
  "/agnted",
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.edit(data);
        if (error) return res.status(400).send(error.details[0].message);
        data.email = tige.encrypt(data.email);

        const ag = await Agent.findOne({
          agentid: data.agentid,
          type: "Agent",
          masteragent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("Agent not Found");
        await Agent.findOneAndUpdate(
          { agentid: data.agentid },
          {
            $set: {
              agentname: data.agentname,
              email: data.email,
            },
          }
        );

        res.send(cryp.encryptobj({ success: "Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

//cashout from master to super
router.post(
  "/mastsup",
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const datat = cryp.decryptobj(req.body.enc);
      if (datat !== "tberror") {
        const { error } = validate.cashouts(datat);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Agent.findOne({
          agentid: datat.agentid,
          type: "SuperAgent",
        });
        if (!userch) return res.status(400).send("SuperAgent Not Found");
        else {
          var sendagent = await Agent.findOne({
            agentid: req.user.agentid,
            type: "MasterAgent",
          });
          if (sendagent && sendagent.superagent === datat.agentid) {
            if (datat.amount > 0) {
              const prkey = await rediscon.redisExistCheck(
                "AdminControls",
                "AdminControls"
              );
              if (prkey > 0) {
                const adm = await rediscon.redisGetData(
                  "AdminControls",
                  "AdminControls"
                );
                if (
                  adm.mastertransfer === "Enable" &&
                  sendagent.transferstatus === "Enable"
                ) {
                  if (
                    adm.transmin <= datat.amount &&
                    datat.amount <= adm.transmax
                  ) {
                    if (sendagent.balance >= datat.amount) {
                      var obj = {
                        sender: req.user.agentid,
                        receiver: userch.agentid,
                        amount: datat.amount,
                        comment: datat.comment,
                        type: "Cashouagent",
                      };

                      await rabitfunc.bullprocess(JSON.stringify(obj), 3);

                      res.send(
                        cryp.encryptobj({
                          success: "Your request processed successfully",
                        })
                      );
                    } else {
                      res.status(400).send("Insufficient Funds!!");
                    }
                  } else {
                    res
                      .status(400)
                      .send("Amount should be in between Min & Max");
                  }
                } else {
                  res
                    .status(400)
                    .send("Transfer Disabled, Please try again after!!");
                }
              }
            } else {
              res.status(400).send("Please enter valid amount");
            }
          } else {
            return res.status(400).send("You are not allowed to Transfer!!");
          }
        }
      }
    }
  })
);

module.exports = router;

//---------------------------------agent-----------------------
//agent profile
router.post(
  "/agprofile",
  cs,
  auth,
  amw(async (req, res) => {
    const user = await Agent.findOne({ agentid: req.user.agentid });
    if (!user) return res.status(400).send("Agent not Found");
    else {
      const supag = await Register.find({
        agent: req.user.agentid,
        type: "User",
      }).countDocuments();

      var obj = {
        agentid: user.agentid,
        date: user.date,
        agentname: user.agentname,
        email: tige.decrypt(user.email),
        balance: user.balance,
        arena: user.arena,
        status: user.status,
        loginstatus: user.loginstatus,
        transferstatus: user.transferstatus,
        type: user.type,
        superagent: user.superagent,
        masteragent: user.masteragent,
        agent: user.agent,
        transmin: user.transmin,
        transmax: user.transmax,
        referral: user.referral,
        refname: user.refname,
        usercount: supag,
      };
      res.send(cryp.encryptobj(obj));
    }
  })
);

//users under Agents
router.post(
  "/getusers",
  cs,
  auth,
  amw(async (req, res) => {
    const ag = await Register.find({
      agent: req.user.agentid,
      usertype: "User",
    }).sort({ date: -1 });
    if (ag && ag.length > 0) {
      var ags = [];
      await ag.forEach((user) => {
        var obj = {
          userid: user.userid,
          date: user.date,
          username: user.username,
          balance: user.balance,
          betstatus: user.betstatus,
          loginstatus: user.loginstatus,
          transferstatus: user.transferstatus,
          arena: user.arena,
          status: user.status,
          usertype: user.usertype,
          kycstatus: user.kycstatus,
          info: user.info,
          superagent: user.superagent,
          masteragent: user.masteragent,
          refname: user.refname,
          agent: user.agent,
          referral: user.referral,
        };
        ags.push(obj);
      });
      res.send(cryp.encryptobj(ags));
    } else {
      return res.status(400).send("Users not found!");
    }
  })
);
//transfer to user
router.post(
  "/transtouser",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const datat = cryp.decryptobj(req.body.enc);
      if (datat !== "tberror") {
        const { error } = validate.trans(datat);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Register.findOne({
          userid: datat.userid,
          type: "User",
        });

        if (!userch) return res.status(400).send("User Not Found");
        else {
          var sendagent = await Agent.findOne({ agentid: req.user.agentid });
          if (datat.amount > 0) {
            if (sendagent.balance >= datat.amount) {
              const prkey = await rediscon.redisExistCheck(
                "AdminControls",
                "AdminControls"
              );
              if (prkey > 0) {
                const adm = await rediscon.redisGetData(
                  "AdminControls",
                  "AdminControls"
                );
                if (
                  adm.agenttransfer === "Enable" &&
                  sendagent.transferstatus === "Enable"
                ) {
                  if (
                    adm.transmin <= datat.amount &&
                    datat.amount <= adm.transmax
                  ) {
                    var obj = {
                      sender: req.user.agentid,
                      receiver: userch.userid,
                      amount: datat.amount,
                      comment: datat.comment,
                      type: "Tranuser",
                    };
                    await rabitfunc.bullprocess(JSON.stringify(obj), 2);

                    res.send(
                      cryp.encryptobj({
                        success: "Amount Transferred successfully",
                      })
                    );
                  } else {
                    res
                      .status(400)
                      .send(
                        `Amount should be in between ${sendagent.transmin} & ${sendagent.transmax}!!`
                      );
                  }
                } else {
                  res
                    .status(400)
                    .send("Transfer Disabled, Please try again after!!");
                }
              }
            } else {
              res.status(400).send("Insufficient Funds!!");
            }
          } else {
            res.status(400).send("Please enter valid amount");
          }
        }
      }
    }
  })
);

//login status
router.post(
  "/aglogstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({
          userid: data.userid,
        });

        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.agent === req.user.agentid) {
            if (usr.loginstatus === data.loginstatus) {
              return res
                .status(400)
                .send("Current user login status : " + `${usr.loginstatus}`);
            } else {
              await Register.findOneAndUpdate(
                { userid: data.userid },
                { loginstatus: data.loginstatus }
              );
              winston.info(
                "Login Status of User: " +
                  usr.username +
                  " Changed to: " +
                  data.loginstatus +
                  " By Agent:" +
                  req.user.email
              );
              await alert_Developers(
                "Login Status of User: " +
                  usr.username +
                  " Changed to: " +
                  data.loginstatus +
                  " By Agent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "User Login Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//transfer status
router.post(
  "/agtrstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({
          userid: data.userid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.agent === req.user.agentid) {
            if (usr.transferstatus === data.transferstatus) {
              return res
                .status(400)
                .send("Current user transfer status : " + `${usr.loginstatus}`);
            } else {
              await Register.findOneAndUpdate(
                { userid: data.userid },
                { transferstatus: data.transferstatus }
              );
              winston.info(
                "Transfer Status of User: " +
                  usr.username +
                  " Changed to: " +
                  data.transferstatus +
                  " By Agent:" +
                  req.user.email
              );
              await alert_Developers(
                "Transfer Status of User: " +
                  usr.username +
                  " Changed to: " +
                  data.transferstatus +
                  " By Agent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "User Transfer Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change!!");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//bet status
router.post(
  "/betstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Register.findOne({
          userid: data.userid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.agent === req.user.agentid) {
            if (usr.betstatus === data.betstatus) {
              return res
                .status(400)
                .send("Current user transfer status : " + `${usr.betstatus}`);
            } else {
              await Register.findOneAndUpdate(
                { userid: data.userid },
                { betstatus: data.betstatus }
              );
              winston.info(
                "Bet Status of User: " +
                  usr.username +
                  " Changed to: " +
                  data.betstatus +
                  " By Agent:" +
                  req.user.email
              );
              await alert_Developers(
                "Bet Status of User: " +
                  usr.username +
                  " Changed to: " +
                  data.betstatus +
                  " By Agent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Bet Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change!!");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//agent change pwd of user
router.post(
  "/usruppwd",
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.pwdupusr(data);
        if (error) return res.status(400).send(error.details[0].message);
        const ag = await Register.findOne({
          userid: data.userid,
          type: "User",
          agent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("User not Found");
        //password hashing
        const salt = await bcrypt.genSalt(10);
        var nwpwd = await bcrypt.hash(data.password, salt);

        //updating new password
        await Register.updateOne(
          { userid: data.userid },

          { $set: { password: nwpwd } }
        );
        res.send(cryp.encryptobj({ success: "Password Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

//cashout
//agent transfer to master agent
router.post(
  "/agtmast",
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const datat = cryp.decryptobj(req.body.enc);
      if (datat !== "tberror") {
        const { error } = validate.cashouts(datat);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Agent.findOne({
          agentid: datat.agentid,
          type: "MasterAgent",
        });
        if (!userch) return res.status(400).send("MasterAgent Not Found");
        else {
          var sendagent = await Agent.findOne({
            agentid: req.user.agentid,
            type: "Agent",
          });
          if (sendagent && sendagent.masteragent === datat.agentid) {
            if (datat.amount > 0) {
              const prkey = await rediscon.redisExistCheck(
                "AdminControls",
                "AdminControls"
              );
              if (prkey > 0) {
                const adm = await rediscon.redisGetData(
                  "AdminControls",
                  "AdminControls"
                );
                if (
                  adm.agenttransfer === "Enable" &&
                  sendagent.transferstatus === "Enable"
                ) {
                  if (
                    adm.transmin <= datat.amount &&
                    datat.amount <= adm.transmax
                  ) {
                    if (sendagent.balance >= datat.amount) {
                      var obj = {
                        sender: req.user.agentid,
                        receiver: userch.agentid,
                        amount: datat.amount,
                        comment: datat.comment,
                        type: "Cashouagent",
                      };

                      await rabitfunc.bullprocess(JSON.stringify(obj), 3);

                      res.send(
                        cryp.encryptobj({
                          success: "Your request processed successfully",
                        })
                      );
                    } else {
                      res.status(400).send("Insufficient Funds!!");
                    }
                  } else {
                    res
                      .status(400)
                      .send("Amount should be in between Min & Max");
                  }
                } else {
                  res
                    .status(400)
                    .send("Transfer Disabled, Please try again after!!");
                }
              }
            } else {
              res.status(400).send("Please enter valid amount");
            }
          } else {
            res.status(400).send("You are not allowed to cashout");
          }
        }
      }
    }
  })
);

//-------------------------------master-----------------
//master profile
router.post(
  "/mastprofile",
  cs,
  auth,
  amw(async (req, res) => {
    const user = await Agent.findOne({ agentid: req.user.agentid });
    if (!user) return res.status(400).send("MasterAgent not Found");
    else {
      var agli = 0;
      const supag = await Agent.find({
        masteragent: req.user.agentid,
        type: "Agent",
      }).countDocuments();
      const list = await Agent.find({
        masteragent: req.user.agentid,
        type: "Agent",
      });
      for (let i = 0; i < list.length; i++) {
        const e = list[i];
        const age = await Register.find({
          agent: e.agentid,
          type: "User",
        }).countDocuments();
        agli = agli + age;
      }

      var obj = {
        agentid: user.agentid,
        date: user.date,
        agentname: user.agentname,
        email: tige.decrypt(user.email),
        balance: user.balance,
        arena: user.arena,
        status: user.status,
        type: user.type,
        superagent: user.superagent,
        masteragent: user.masteragent,
        agent: user.agent,
        loginstatus: user.loginstatus,
        transferstatus: user.transferstatus,
        transmin: user.transmin,
        transmax: user.transmax,
        referral: user.referral,
        refname: user.refname,
        agentcount: supag,
        usercount: agli,
      };
      res.send(cryp.encryptobj(obj));
    }
  })
);
//Agent list
router.post(
  "/getagents",
  cs,
  auth,
  amw(async (req, res) => {
    const ag = await Agent.find({
      masteragent: req.user.agentid,
      type: "Agent",
    }).sort({ _id: -1 });
    if (ag && ag.length > 0) {
      var ags = [];
      await ag.forEach((user) => {
        var obj = {
          agentid: user.agentid,
          date: user.date,
          agentname: user.agentname,
          email: tige.decrypt(user.email),
          balance: user.balance,
          arena: user.arena,
          status: user.status,
          loginstatus: user.loginstatus,
          transferstatus: user.transferstatus,
          type: user.type,
          superagent: user.superagent,
          masteragent: user.masteragent,
          agent: user.agent,
          referral: user.referral,
          refname: user.refname,
        };
        ags.push(obj);
      });
      res.send(cryp.encryptobj(ags));
    } else {
      return res.status(400).send("Agents not found!");
    }
  })
);

//transfer to agent
router.post(
  "/transtoagent",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.transf(data);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Agent.findOne({
          agentid: data.agentid,
          type: "Agent",
        });
        if (!userch) return res.status(400).send("Agent Not Found");
        else {
          var sendagent = await Agent.findOne({ agentid: req.user.agentid });
          if (data.amount > 0) {
            const prkey = await rediscon.redisExistCheck(
              "AdminControls",
              "AdminControls"
            );
            if (prkey > 0) {
              const adm = await rediscon.redisGetData(
                "AdminControls",
                "AdminControls"
              );
              if (
                adm.mastertransfer === "Enable" &&
                sendagent.transferstatus === "Enable"
              ) {
                if (
                  adm.transmin <= data.amount &&
                  data.amount <= adm.transmax
                ) {
                  if (sendagent.balance >= data.amount) {
                    var obj = {
                      sender: req.user.agentid,
                      receiver: userch.agentid,
                      amount: data.amount,
                      comment: data.comment,
                      type: "Tranmast",
                    };
                    await rabitfunc.bullprocess(JSON.stringify(obj), 2);

                    res.send(
                      cryp.encryptobj({
                        success: "Amount Transferred successfully",
                      })
                    );
                  } else {
                    res.status(400).send("Insufficient Funds!!");
                  }
                } else {
                  res
                    .status(400)
                    .send(
                      `Amount should be in between ${sendagent.transmin} & ${sendagent.transmax}!!`
                    );
                }
              } else {
                res
                  .status(400)
                  .send("Transfer Disabled , Please try again after!!");
              }
            }
          } else {
            res.status(400).send("Please enter valid amount");
          }
        }
      }
    }
  })
);
//agent login status
router.post(
  "/aglogstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Agent.findOne({
          agentid: data.agentid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.masteragent === req.user.agentid) {
            if (usr.loginstatus === data.loginstatus) {
              return res
                .status(400)
                .send("Current agent login status : " + `${usr.loginstatus}`);
            } else {
              await Agent.findOneAndUpdate(
                { agentid: data.agentid },
                { loginstatus: data.loginstatus }
              );
              winston.info(
                "Login Status of Agent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.loginstatus +
                  " By MasterAgent:" +
                  req.user.email
              );
              await alert_Developers(
                "Login Status of Agent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.loginstatus +
                  " By MasterAgent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Agent Login Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//transfer status
router.post(
  "/agtrstat",
  cs,
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usr = await Agent.findOne({
          agentid: data.agentid,
        });
        if (!usr) return res.status(400).send("No User Found");
        else {
          if (usr.masteragent === req.user.agentid) {
            if (usr.transferstatus === data.transferstatus) {
              return res
                .status(400)
                .send("Current user transfer status : " + `${usr.loginstatus}`);
            } else {
              await Agent.findOneAndUpdate(
                { agentid: data.agentid },
                { transferstatus: data.transferstatus }
              );
              winston.info(
                "Transfer Status of Agent: " +
                  tige.decrypt(usr.email) +
                  " Changed to: " +
                  data.transferstatus +
                  " By MasterAgent:" +
                  req.user.email
              );
              await alert_Developers(
                "Transfer Status of Agent: " +
                  usr.agentname +
                  " Changed to: " +
                  data.transferstatus +
                  " By MasterAgent:" +
                  req.user.agentname
              );
              res.send(
                cryp.encryptobj({
                  success: "Agent Transfer Status updated Successfully",
                })
              );
            }
          } else {
            return res.status(400).send("You are not allowed to change!!");
          }
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//master agent change pwd of agent
router.post(
  "/aguppwd",
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.pwdup(data);
        if (error) return res.status(400).send(error.details[0].message);
        const ag = await Agent.findOne({
          agentid: data.agentid,
          type: "Agent",
          masteragent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("Agent not Found");
        //password hashing
        const salt = await bcrypt.genSalt(10);
        var nwpwd = await bcrypt.hash(data.password, salt);

        //updating new password
        await Agent.updateOne(
          { agentid: data.agentid },

          { $set: { password: nwpwd } }
        );
        res.send(cryp.encryptobj({ success: "Password Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//update profile of agent
router.post(
  "/agnted",
  auth,
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.edit(data);
        if (error) return res.status(400).send(error.details[0].message);
        data.email = tige.encrypt(data.email);

        const ag = await Agent.findOne({
          agentid: data.agentid,
          type: "Agent",
          masteragent: req.user.agentid,
        });
        if (!ag) return res.status(400).send("Agent not Found");
        await Agent.findOneAndUpdate(
          { agentid: data.agentid },
          {
            $set: {
              agentname: data.agentname,
              email: data.email,
            },
          }
        );

        res.send(cryp.encryptobj({ success: "Updated Successfully" }));
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);

//cashout from master to super
router.post(
  "/mastsup",
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.cashouts(data);
        if (error) return res.status(400).send(error.details[0].message);
        const userch = await Agent.findOne({
          agentid: data.agentid,
          type: "SuperAgent",
        });
        if (!userch) return res.status(400).send("SuperAgent Not Found");
        else {
          var sendagent = await Agent.findOne({
            agentid: req.user.agentid,
            type: "MasterAgent",
          });
          if (sendagent && sendagent.superagent === data.agentid) {
            if (data.amount > 0) {
              const prkey = await rediscon.redisExistCheck(
                "AdminControls",
                "AdminControls"
              );
              if (prkey > 0) {
                const adm = await rediscon.redisGetData(
                  "AdminControls",
                  "AdminControls"
                );
                if (
                  adm.mastertransfer === "Enable" &&
                  sendagent.transferstatus === "Enable"
                ) {
                  if (
                    adm.transmin <= data.amount &&
                    data.amount <= adm.transmax
                  ) {
                    if (sendagent.balance >= data.amount) {
                      var obj = {
                        sender: req.user.agentid,
                        receiver: userch.agentid,
                        amount: data.amount,
                        comment: data.comment,
                        type: "Cashouagent",
                      };

                      await rabitfunc.bullprocess(JSON.stringify(obj), 3);

                      res.send(
                        cryp.encryptobj({
                          success: "Your request processed successfully",
                        })
                      );
                    } else {
                      res.status(400).send("Insufficient Funds!!");
                    }
                  } else {
                    res
                      .status(400)
                      .send("Amount should be in between Min & Max");
                  }
                } else {
                  res
                    .status(400)
                    .send("Transfer Disabled, Please try again after!!");
                }
              }
            } else {
              res.status(400).send("Please enter valid amount");
            }
          } else {
            return res.status(400).send("You are not allowed to Transfer!!");
          }
        }
      }
    }
  })
);
forEach;

//-----------------------------admin arena----------------
//get arena list
router.post(
  "/arenalist",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const arena = await Arena.find({});
    if (arena.length > 0) {
      return res.send(cryp.encryptobj({ arena }));
    } else {
      return res.status(400).send("Arena list not found");
    }
  })
);

//change status of arena
router.post(
  "/arenastatus",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const data = cryp.decryptobj(req.body.enc);
    if (data !== "tberror") {
      const arena = await Arena.findOne({ arenaid: data.arenaid });
      if (!arena) return res.status(400).send("Arena not Found");
      if (arena.status === data.status) {
        return res
          .status(400)
          .send("Current arena status : " + `${arena.status}`);
      } else {
        await Arena.findOneAndUpdate(
          { arenaid: data.arenaid },
          { status: data.status }
        );

        winston.info(
          "Status of arena: " +
            data.arenaid +
            " Changed to: " +
            data.status +
            " By Admin:" +
            req.user.email
        );
        await alert_Developers(
          "Status of arena: " +
            arena.arenaname +
            "\nChanged to: " +
            data.status +
            "\nBy Admin:" +
            req.user.name
        );
        res.send(
          cryp.encryptobj({ success: "Arena Status Updated Successfully" })
        );
      }
    } else {
      return res.status(400).send("Invalid Parameters");
    }
  })
);
//delete arena
router.post(
  "/delarna",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const data = cryp.decryptobj(req.body.enc);
    if (data !== "tberror") {
      const arenachk = await Arena.findOne({ arenaid: data.arenaid });
      if (!arenachk) return res.status(400).send("Arena not Found");
      else {
        //delete arena
        await Arena.deleteOne({ arenaid: data.arenaid });
        //fight delete
        await Fight.deleteMany({ arenaid: data.arenaid });

        winston.info(
          "Arena: " + data.arenaid + "\nDeleted By: " + req.user.email
        );
        await alert_Developers(
          "Arena: " + arenachk.arenaname + "\nDeleted By: " + req.user.name
        );
        res.send(cryp.encryptobj({ success: "Arena Deleted Successfully" }));
      }
    } else {
      return res.status(400).send("Invalid Parameters");
    }
  })
);

//-------------------operatoradmin-----------

// reset password of admin
router.post(
  "/resetpwd",
  cs,
  [auth, admin],
  amw(async (req, res) => {
    const { lerror } = await validate.getenc(req.body);
    if (lerror) return res.status(400).send(error.details[0].message);
    const deusrobj = cryp.decryptobj(req.body.enc);
    if (deusrobj !== "tberror") {
      const { error } = validate.oprepwd(deusrobj);
      if (error) return res.status(400).send(error.details[0].message);

      const admin = await Operator.findOne({ operatorid: deusrobj.operatorid });
      if (admin.length <= 0) return res.status(400).send("Operator not found");
      else {
        const salt1 = await bcrypt.genSalt(10);
        var npassword = await bcrypt.hash(deusrobj.newpassword, salt1);
        const upduser = await Operator.findOneAndUpdate(
          {
            operatorid: admin.operatorid,
          },

          { $set: { password: npassword } }
        );
        winston.info(
          "Operator : " +
            tige.decrypt(admin.email) +
            "password reset by " +
            req.user.email
        );

        await alert_Developers(
          "Operator : " + admin.name + "password reset by " + req.user.name
        );
        res.send(cryp.encryptobj({ success: deusrobj.newpassword }));
      }
    } else {
      //error while decrypting user
      return res.status(400).send("Invalid Parameter");
    }
  })
);
//operator delete
router.post(
  "/delopr",
  cs,
  [auth, admin],
  ratecut,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const { error } = validate.delopr(data);
        if (error) return res.status(400).send(error.details[0].message);

        const usr = await Operator.findOne({ operatorid: data.operatorid });
        if (!usr) return res.status(400).send("No User Found");
        else {
          await Operator.deleteOne({ operatorid: data.operatorid });
          winston.info(
            "Operator: " +
              tige.decrypt(usr.email) +
              " Deleted By Admin:" +
              req.user.email
          );
          await alert_Developers(
            "Operator: " + usr.name + " Deleted By Admin:" + req.user.name
          );
          res.send(
            cryp.encryptobj({ success: "Operator Deleted Successfully" })
          );
        }
      } else {
        return res.status(400).send("Invalid Parameters");
      }
    }
  })
);
//------------------authagents----------------
// const { withdraw_email } = require("../middleware/email");
// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   host: config.get("emailhost"),
//   port: 587,
//   auth: {
//     user: config.get("emailuser"),
//     pass: config.get("emailpass"),
//   },
// });

verifycap = async (datatosend) => {
  const rawResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "secret=6Levm1odAAAAAFE7QWHf2ASrwHY279NZuvebEq0f&response=" +
        datatosend,
    }
  ).then((res) => res.json());
  return rawResponse;
};

//
router.post(
  "/reqloginotpsup",
  ratecut,
  cs,
  amw(async (req, res) => {
    const prkey = await rediscon.redisExistCheck(
      "AdminControls",
      "AdminControls"
    );
    if (prkey > 0) {
      const adm = await rediscon.redisGetData("AdminControls", "AdminControls");
      const { error } = await validate.getenc(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      const logindecrob = cryp.decryptobj(req.body.enc);
      if (logindecrob !== "tberror") {
        //validating the login data send by user

        const { error } = validate.agotpre(logindecrob);
        if (error) return res.status(400).send(error.details[0].message);
        //searching for user exists
        const validcap = await verifycap(logindecrob.captcha);

        if (validcap.success === true) {
          var loginphn = tige.encrypt(logindecrob.email);
          const loginsrch = await Agent.findOne({ email: loginphn });
          if (!loginsrch) return res.status(400).send("Agent Not Found");
          if (loginsrch.type === "SuperAgent") {
            var logich = "superlogin";
          } else if (loginsrch.type === "MasterAgent") {
            var logich = "masterlogin";
          } else {
            var logich = "agentlogin";
          }
          // validating password
          if (
            adm[`${logich}`] === "Enable" &&
            loginsrch.loginstatus === "Enable"
          ) {
            // if (loginsrch.type === "SuperAgent") {
            const validpwd = await bcrypt.compare(
              logindecrob.password,
              loginsrch.password
            );
            if (!validpwd) return res.status(400).send("Invalid Password!");
            // generating otp for user
            await rediscon.genOtp(loginsrch.email, 123456);

            //var genotp = Math.floor(100000 + Math.random() * 900000);
            // var loginotp = {
            //   email: loginsrch.email,
            //   otp: "123456",
            //   status: "pending",
            // };
            // //saving otp
            // const loginusr = await new Adotp(loginotp);
            // await loginusr.save();

            // var html = withdraw_email(loginsrch.agentname, genotp);
            // var sen = transporter.sendMail({
            //   from: "Cockxing <digitalcockxing.live>",
            //   to: logindecrob.email,
            //   subject: "Cockxing Login OTP",
            //   html: html,
            // });

            res.send(cryp.encryptobj({ success: "Otp Sent Successfully" }));
          } else {
            return res
              .status(400)
              .send("Login Disable, Please try again after some time!!");
          }
        } else {
          return res.status(400).send("Invalid captcha");
        }
      } else {
        //error while decrypting user
        return res.status(400).send("Invalid Parameter");
      }
    }
  })
);
router.post(
  "/login",
  ratecut,
  cs,
  amw(async (req, res) => {
    //validating data
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const otpdecryobj = cryp.decryptobj(req.body.enc);
    if (otpdecryobj !== "tberror") {
      const { error } = validate.admlogin(otpdecryobj);
      if (error) return res.status(400).send(error.details[0].message);
      //searching for otp
      var otpphn = tige.encrypt(otpdecryobj.email);
      // const otpsrch = await Adotp.findOne({ email: otpphn });
      // if (!otpsrch) return res.status(400).send("OTP Expired..");
      // else {
      //   if (otpsrch.otp === otpdecryobj.otp) {
      // if otp is valid sending token
      const prkey = await rediscon.redisExistSingle(otpphn);
      if (prkey) {
        const otpsrch = await rediscon.redisgetsingle(otpphn);
        if (parseFloat(otpsrch) === parseFloat(otpdecryobj.otp)) {
          const usersrch = await Agent.findOne({
            email: otpphn,
          });
          if (!usersrch) return res.status(400).send("Agent Not Found");
          else {
            if (usersrch.loginstatus === "Enable") {
              await Agent.findOneAndUpdate(
                { email: usersrch.email },
                { ip: otpdecryobj.ip }
              );
              var decryphn = tige.decrypt(usersrch.email);
              var decryname = usersrch.agentname;
              const token = jwt.sign(
                {
                  agentid: usersrch.agentid,
                  agentname: decryname,
                  email: decryphn,
                  status: usersrch.status,
                  type: usersrch.type,
                  loginstatus: usersrch.loginstatus,
                  ip: otpdecryobj.ip,
                },
                config.get("jwtPrivateKey"),
                {
                  expiresIn: "30d",
                }
              );
              //await Adotp.deleteMany({ email: otpphn });
              res.send(cryp.encryptobj(token));
            } else {
              return res
                .status(400)
                .send("Login Deactivated by Admin!,Please contact support!!");
            }
          }
        } else {
          //invalid otp
          res.status(400).send("Invalid Otp");
        }
      } else {
        res.status(400).send("Otp Expired!!");
      }
    } else {
      //error while decrypting user
      return res.status(400).send("Invalid Parameters");
    }
  })
);

router.post(
  "/resendotp",
  ratecut,
  cs,
  amw(async (req, res) => {
    //validating encrpyted string send by user
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const resendecrob = cryp.decryptobj(req.body.enc);
    if (resendecrob !== "tberror") {
      //validating the data send by user

      const { error } = validate.adresend(resendecrob);
      if (error) return res.status(400).send(error.details[0].message);
      //searching for user exists

      var resendphn = tige.encrypt(resendecrob.email);
      const resendusrsrch = await Agent.findOne({ email: resendphn });
      if (!resendusrsrch) return res.status(400).send("User Not Found.");
      else {
        // generating otp for user
        await rediscon.genOtp(resendphn, 123456);
        //var genotp = Math.floor(100000 + Math.random() * 900000);
        // var resendotp = {
        //   email: resendusrsrch.email,
        //   otp: "123456",
        //   status: "pending",
        // };
        // //saving otp
        // const resendotpob = await new Adotp(resendotp);
        // await resendotpob.save();

        // var html = withdraw_email(resendusrsrch.agentname, genotp);
        // var sen = transporter.sendMail({
        //   from: "Cockxing <digitalcockxing.live>",
        //   to: resendecrob.email,
        //   subject: "Cockxing Login OTP",
        //   html: html,
        // });

        //sending response to user

        res.send(cryp.encryptobj({ success: "Otp Sent Successfully" }));
      }
    } else {
      //error while decrypting user
      return res.status(400).send("Invalid Parameter");
    }
  })
);

// ref commission histories
router.post(
  "/refhist",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const refhist1 = await Refhistory.find({
          agentid: req.user.agentid,
        }).sort({
          _id: -1,
        });
        const skip = Number(data.skip);
        if (refhist1.length <= skip) {
          var arr = [];
          res.status(200).send(cryp.encryptobj(arr));
        } else {
          const refhist = await Refhistory.find({ agentid: req.user.agentid })
            .limit(100)
            .skip(skip)
            .sort({ _id: -1 });
          if (refhist.length <= 0)
            return res.status(400).send("Commission history Not Found");
          else {
            var arr = [];
            await refhist.forEach((e) => {
              var obj = {
                agentid: e.agentid,
                email: e.email,
                agentname: e.agentname,
                master: e.master,
                agent: e.agent,
                fromusername: e.fromusername,
                fromuserid: e.fromuserid,
                gameid: e.gameid,
                amount: e.amount,
                hid: e.hid,
                betid: e.betid,
                date: e.date,
                comment: e.comment,
                status: e.status,
                type: e.type,
              };
              arr.push(obj);
            });
            res.send(cryp.encryptobj(arr));
          }
        }
      }
    }
  })
);
//transfer hist
router.post(
  "/transhist",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const thist1 = await Transfer.find({
          userid: req.user.agentid,
        }).sort({
          _id: -1,
        });
        const skip = Number(data.skip);
        if (thist1.length <= skip) {
          var arr = [];
          res.status(200).send(cryp.encryptobj(arr));
        } else {
          const trhist = await Transfer.find({
            userid: req.user.agentid,
          })
            .select({ _id: 0, __v: 0 })
            .limit(100)
            .skip(skip)
            .sort({ _id: -1 });
          if (trhist.length <= 0)
            return res.status(400).send("Transfer history Not Found");
          else {
            res.send(cryp.encryptobj(trhist));
          }
        }
      }
    }
  })
);
//ref history by agentid
router.post(
  "/refhistbyid",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usrg = await Agent.findOne({ agentid: data.agentid });
        if (!usrg) return res.status(400).send("Agent not found");
        else {
          if (
            (req.user.type === "SuperAgent" &&
              usrg.superagent === req.user.agentid &&
              usrg.type === "MasterAgent") ||
            (req.user.type === "MasterAgent" &&
              usrg.masteragent === req.user.agentid &&
              usrg.type === "Agent")
          ) {
            const refhist1 = await Refhistory.find({
              agentid: data.agentid,
            }).sort({
              _id: -1,
            });
            const skip = Number(data.skip);
            if (refhist1.length <= skip) {
              var arr = [];
              res.status(200).send(cryp.encryptobj(arr));
            } else {
              const refhist = await Refhistory.find({ agentid: data.agentid })
                .limit(100)
                .skip(skip)
                .sort({ _id: -1 });
              if (refhist.length <= 0)
                return res.status(400).send("Commission history Not Found");
              else {
                var arr = [];
                await refhist.forEach((e) => {
                  var obj = {
                    agentid: e.agentid,
                    email: e.email,
                    agentname: e.agentname,
                    master: e.master,
                    agent: e.agent,
                    fromusername: e.fromusername,
                    fromuserid: e.fromuserid,
                    gameid: e.gameid,
                    amount: e.amount,
                    hid: e.hid,
                    betid: e.betid,
                    date: e.date,
                    comment: e.comment,
                    status: e.status,
                    type: e.type,
                  };
                  arr.push(obj);
                });
                res.send(cryp.encryptobj(arr));
              }
            }
          } else {
            return res.status(400).send("This Agent is not Mapped under you !");
          }
        }
      }
    }
  })
);
//transfer hist by id
router.post(
  "/transhistbyid",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usrg = await Agent.findOne({ agentid: data.agentid });
        if (!usrg) return res.status(400).send("Agent not found");
        else {
          if (
            (req.user.type === "SuperAgent" &&
              usrg.superagent === req.user.agentid &&
              usrg.type === "MasterAgent") ||
            (req.user.type === "MasterAgent" &&
              usrg.masteragent === req.user.agentid &&
              usrg.type === "Agent")
          ) {
            const thist1 = await Transfer.find({
              userid: data.agentid,
            }).sort({
              _id: -1,
            });
            const skip = Number(data.skip);
            if (thist1.length <= skip) {
              var arr = [];
              res.status(200).send(cryp.encryptobj(arr));
            } else {
              const trhist = await Transfer.find({
                userid: data.agentid,
              })
                .select({ _id: 0, __v: 0 })
                .limit(100)
                .skip(skip)
                .sort({ date: -1 });
              if (trhist.length <= 0)
                return res.status(400).send("Transfer history Not Found");
              else {
                res.send(cryp.encryptobj(trhist));
              }
            }
          } else {
            return res.status(400).send("This Agent is not Mapped under you !");
          }
        }
      }
    }
  })
);

//edit details of agent
// router.post(
//   "/agnted",
//   auth,
//   ratecut,
//   amw(async (req, res) => {
//     const { error } = await validate.getenc(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     else {
//       const data = cryp.decryptobj(req.body.enc);
//       if (data !== "tberror") {
//         const { error } = validate.edit(data);
//         if (error) return res.status(400).send(error.details[0].message);
//         data.phone = tige.encrypt(data.phone);
//         data.name = tige.encrypt(data.name);
//         const ag = await Agent.findOne({
//           agentid: data.agentid,
//           type: "Agent",
//           masteragent: req.user.agentid,
//         });
//         if (!ag) return res.status(400).send("Agent not Found");
//         await Agent.findOneAndUpdate(
//           { agentid: data.agentid },
//           {
//             $set: {
//               name: data.name,
//               phone: data.phone,
//               birthdate: data.birthdate,
//               occupation: data.occupation,
//               region: data.region,
//               city: data.city,
//               province: data.province,
//             },
//           }
//         );

//         res.send(cryp.encryptobj({ success: "Updated Successfully" }));
//       } else {
//         return res.status(400).send("Invalid Parameters");
//       }
//     }
//   })
// );

//user transfer hist by id
router.post(
  "/usrtranshistbyid",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usrg = await Register.findOne({ userid: data.userid });

        if (!usrg) return res.status(400).send("user not found");
        else {
          if (
            req.user.type === "Agent" &&
            usrg.agent === req.user.agentid &&
            usrg.usertype === "User"
          ) {
            const thist1 = await Transfer.find({
              userid: data.userid,
            }).sort({
              _id: -1,
            });
            const skip = Number(data.skip);
            if (thist1.length <= skip) {
              var arr = [];
              res.status(200).send(cryp.encryptobj(arr));
            } else {
              const trhist = await Transfer.find({
                userid: data.userid,
              })
                .select({ _id: 0, __v: 0 })
                .limit(100)
                .skip(skip)
                .sort({ date: -1 });
              if (trhist.length <= 0)
                return res.status(400).send("Transfer history Not Found");
              else {
                res.send(cryp.encryptobj(trhist));
              }
            }
          } else {
            return res.status(400).send("This User is not Mapped under you !");
          }
        }
      }
    }
  })
);
//user bet history
router.post(
  "/usrbethistbyid",
  cs,
  auth,
  amw(async (req, res) => {
    const { error } = await validate.getenc(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
      const data = cryp.decryptobj(req.body.enc);
      if (data !== "tberror") {
        const usrg = await Register.findOne({ userid: data.userid });
        if (!usrg) return res.status(400).send("user not found");
        else {
          if (
            req.user.type === "Agent" &&
            usrg.agent === req.user.agentid &&
            usrg.usertype === "User"
          ) {
            const thist1 = await History.find({
              userid: data.userid,
            }).sort({
              _id: -1,
            });
            const skip = Number(data.skip);
            if (thist1.length <= skip) {
              var arr = [];
              res.status(200).send(cryp.encryptobj(arr));
            } else {
              const trhist = await History.find({
                userid: data.userid,
              })
                .select({ _id: 0, __v: 0 })
                .limit(100)
                .skip(skip)
                .sort({ date: -1 });
              if (trhist.length <= 0)
                return res.status(400).send("Bet history Not Found");
              else {
                res.send(cryp.encryptobj(trhist));
              }
            }
          } else {
            return res.status(400).send("This User is not Mapped under you !");
          }
        }
      }
    }
  })
);

