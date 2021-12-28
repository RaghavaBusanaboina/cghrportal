/** @format */

//schema for emp login
const mongoose = require("mongoose");
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
  exports.EmployeeLogin = EmployeeLogin;
} catch (e) {
  console.log(`Employee login model${e}`);
}
