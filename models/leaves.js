/** @format */

//schema for employee leaves

const mongoose = require("mongoose");
const Joi = require("joi");
const { JoiPassword } = require("joi-password");
const moment = require("moment");
try {
  const employeeLeaveSchema = mongoose.Schema({
    ADate: {
      type: Date,
      default: Date.now,
    },
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
    organisation: {
      type: String,
    },
    AppliedOn: {
      type: String,
      default: function date() {
        let date = new Date();
        let d1 = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes()
        );
        return moment(d1).format("DD/MM/YYYY HH:MM");
      },
    },
    To: { type: String, required: true, minlength: 4 },

    from_Date: {
      type: String,
      required: true,
    },
    to_Date: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      minlength: 5,
      maxlength: 100,
      required: true,
    },
    reason: {
      type: String,
      minlength: 5,
      maxlength: 255,
      required: true,
    },
    leave_type: {
      type: String,
      minlength: 5,
      required: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  });
  const EmployeeLeave = mongoose.model("employeeLeave", employeeLeaveSchema);

  function validateEmployeeLeave(employeeleave) {
    let date = new Date();
    let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    d1 = moment(d1).format("DD/MM/YYYY");
    let d2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    d2 = moment(d2).format("DD/MM/YYYY");
    const schema = Joi.object({
      EmployeeId: Joi.string().min(3),
      EmployeeName: Joi.string().min(3).max(50),
      To: Joi.string().min(4).required(),
      from_Date: Joi.date().min(d1).required(),
      to_Date: Joi.date().min(d2).required(),
      subject: Joi.string().min(5).max(100).required(),
      reason: Joi.string().min(5).max(255).required(),
      leave_type: Joi.string().min(4).required(),
      organisation: Joi.string(),
    });
    return schema.validate(employeeleave);
  }
  exports.validateEmployeeLeave = validateEmployeeLeave;
  exports.EmployeeLeave = EmployeeLeave;
} catch (error) {
  console.log(`Employee Leave schema${error}`);
}
