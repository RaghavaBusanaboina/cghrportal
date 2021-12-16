/** @format */

//schema for emp login
const mongoose = require("mongoose");
const Joi = require("joi");
try {
  const employeeLoginSchema = mongoose.Schema({
    EmployeeId: {
      type: String,
      required: true,
    },
    logged_out: {
      type: Boolean,
      default: false,
    },
    logged_in_at: {
      type: Date,
      default: Date.now,
    },
    logged_out_at: {
      type: Date,
      default: Date.now,
    },
    ip_address: {
      type: String,
      default: null,
    },
    token_deleted: {
      type: Boolean,
      default: false,
    },
    device: {
      type: String,
      default: null,
    },
    token_id: {
      type: String,
      default: true,
    },
    token_secret: {
      type: String,
      default: true,
    },
  });
  const EmployeeLogin = mongoose.model("employeeLogin", employeeLoginSchema);
  function validateEmployeelogindata(login) {
    const schema = Joi.object({
      EmployeeId: Joi.string().min(3).required(),
      logged_out: Joi.boolean().required,
      ip_address: Joi.string().required(),
      token_deleted: Joi.bool(),
      device: Joi.string().required(),
      token_id: Joi.string(),
      token_secret: Joi.string(),
    });
    return schema.validate(login);
  }
  exports.EmployeeLogin = EmployeeLogin;
  exports.validateEmployeelogindata = validateEmployeelogindata;
} catch (e) {
  console.log(`Employee login model${e}`);
}
