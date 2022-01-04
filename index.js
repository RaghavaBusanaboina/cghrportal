/** @format */

const express = require("express");
const app = express();
var queue = require("express-queue");
const mongoose = require("mongoose");
const postadmin = require("./routes/postadmin");
const getadmin = require("./routes/getadmin");
const postemployee = require("./routes/postemployee");
const getemployee = require("./routes/getemployee");
const config = require("config");
const redisset = require("./redis/redisset");
const redisget = require("./redis/regisget");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
var sessions = require("express-session");
require("./prod")(app);
// Mongodb connection
const db = config.get("db");
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // console.log("connected to mongodb");
  })
  .catch("db not connected..!");
// mongoose
//   .connect("mongodb://localhost/Hr_portal")
//   .then(() => {
//     console.log("connected to mongodb");
//   })
//   .catch((err) => {
//     console.log(`${err}`);
//   });
// password: "b2hjj0OeKFipw1KnS2bPkNMB6KgnHoCW",
const csrfProtection = csrf({
  cookie: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(csrfProtection);
app.use(cookieParser());
app.use(
  sessions({
    cookieName: "demo-session",
    secret: "this is a secret msg",
    duration: 30 * 60 * 1000,
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/api/admin/get", getadmin);
app.use("/api/employee/get", getemployee);
app.use(
  "/api/admin/post",
  postadmin,
  queue({ activeLimit: 1, queuedLimit: 1 })
);
app.use(
  "/api/employee/post",
  postemployee,
  queue({ activeLimit: 1, queuedLimit: 1 })
);
// async function call() {
//   // await redisset.test();
//   // console.log("call get function-->", await redisget.test());//
//   await redisset.getweekmonth("Codegene");
//   var value = await redisget.getweekmonth();
//   var data = value.finaldata;
//   console.log("call get function-->", data);
// }
// call();
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port 🚀 ${port}`);
});
