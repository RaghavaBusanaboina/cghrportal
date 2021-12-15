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
    "EmployeeTermination",
    employeeTerminationSchema
  );

  function validateemployeeTermination(employee) {
    const schema = Joi.object({
      EmployeeId: Joi.string().min(5).required(),
      EmployeeName: Joi.string().min(5).required(),
      organisation: Joi.string().min(3).required(),
      Reason: Joi.string().min(3).required(),
      From: Joi.string().min(3).required(),
      ExperienceHere: Joi.string().required(),
      EmployeeRecord: Joi.array().required(),
      AgreementDone: Joi.string().valid("Yes", "No").required(),
    });
    return schema.validate(employee);
  }
  exports.EmployeeTermination = EmployeeTermination;
  exports.validateemployeeTermination = validateemployeeTermination;
} catch (error) {
  console.log(`employee terminational model${err}`);
}
