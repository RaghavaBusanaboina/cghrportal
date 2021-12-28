/** @format */

//schema for employee leaves
const mongoose = require("mongoose");
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
  exports.EmployeeLeave = EmployeeLeave;
} catch (error) {
  console.log(`Employee Leave schema${error}`);
}
