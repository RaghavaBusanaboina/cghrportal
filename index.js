/** @format */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const registerHr = require("./routes/registerHr");
const employee = require("./routes/employee");
const config = require("config");
const multer = require("multer");

require("./prod")(app);
// Mongodb connection
const db = config.get("db");
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongodb");
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

app.use(express.json());
app.use("/api/admin", registerHr);
app.use("/api/employee", employee);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port 🚀 ${port}`);
});
const { EmployeeRegisters } = require("./models/employeeRegisters");
async function getdata() {
  const empData = await EmployeeRegisters.find({}).select(
    "EmployeeId EmployeeName -_id"
  );
  for (let i = 0; i < empData.length; i++) {
    const element = empData[i];
    console.log(element.EmployeeId, element.EmployeeName);
  }
  // return empData;
}
getdata();
