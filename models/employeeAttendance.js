/** @format */

//schema for employee attendance

const mongoose = require("mongoose");
const moment = require("moment");
try {
  const employeeAttendanceSchema = mongoose.Schema({
    EmployeeId: {
      type: String,
      required: true,
      minlength: 4,
    },
    EmployeeName: {
      type: String,
      required: true,
      minlength: 4,
    },
    Date: {
      type: String,
      default: function date() {
        let date = new Date();
        let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return moment(d1).format("DD/MM/YYYY");
      },
    },
    ADate: {
      type: Date,
      default: Date.now,
    },
    inTime: {
      type: String,
      default: "pending",
    },
    outTime: {
      type: String,
      default: "pending",
    },
    organisation: {
      type: String,
    },
  });
  const EmployeeAttendance = mongoose.model(
    "EmployeeAttendances",
    employeeAttendanceSchema
  );
  exports.EmployeeAttendance = EmployeeAttendance;
} catch (error) {
  console.log(`Employee Attendance${error}`);
}
