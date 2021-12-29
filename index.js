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
  console.log("call set function-->", await redisset.test());
  console.log("call get function-->", await redisget.test());
}
call();
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
async function dum() {
  client.set("test", "val", function (err) {
    if (err) {
      console.error("error");
    } else {
      client.get("test", function (err, value) {
        if (err) {
          console.error("error");
        } else {
          console.log("Worked: " + value);
        }
      });
    }
  });
}
dum();
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port 🚀 ${port}`);
});
