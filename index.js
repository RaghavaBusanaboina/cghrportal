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
const path = require("path");
const redis = require("redis");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
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
async function call() {
  console.log("call fun_____________");
  try {
    var organisation = "Codegene";
    var data = await redisset.redisExistCheck("getweekmonth0", "Codegene");
    console.log("dataaaa", data);

    if (data) {
      console.log("iffffff");
      var values = await client.HGETALL("getweekmonth0", organisation);
      var parsedData = JSON.parse(JSON.stringify(values));
      var emplen = Number(JSON.parse(parsedData[organisation])["count"]);
      console.log(emplen);
      // console.log("new000", JSON.parse(parsedData[organisation])["count"]);
      // return res.status(200).send(parsedData);
    } else {
      await redisset.getweekmonth((organisation = organisation));
      var values = await client.HGETALL("getweekmonth0", organisation);
      console.log("valuesssssssss", values);
      var parsedData = JSON.parse(JSON.stringify(values));
      console.log("new000000000000000");
      console.log(parsedData.organisation);
      // return res.status(200).send(parsedData);
    }
  } catch (error) {
    console.log(`${error}`);
    // res.status(400).send({ data: error });
  }
}
// call();
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port 🚀 ${port}`);
});
