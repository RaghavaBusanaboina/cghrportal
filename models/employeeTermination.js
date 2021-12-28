/** @format */

// schema for employee termination from admin
const mongoose = require("mongoose");
const Joi = require("joi");
const moment = require("moment");

try {
  const employeeTerminationSchema = mongoose.Schema({
    EmployeeId: {
      type: String,
      required: true,
      minlength: 5,
    },
    EmployeeName: {
      type: String,
      required: true,
      minlength: 5,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    organisation: {
      type: String,
      required: true,
      minlength: 3,
    },
    Reason: {
      type: String,
      required: true,
      minlength: 5,
    },
    ExperienceHere: {
      type: String,
      required: true,
    },
    AgreementDone: {
      type: String,
      required: true,
    },
    From: {
      type: String,
      required: true,
      minlength: 5,
    },
    TerminatedOn: {
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
    EmployeeRecord: { type: Array, required: true },
  });
  const EmployeeTermination = mongoose.model(
    "EmployeeTerminationn",
    employeeTerminationSchema
  );

  exports.EmployeeTermination = EmployeeTermination;
} catch (error) {
  console.log(`employee terminational model${err}`);
}
