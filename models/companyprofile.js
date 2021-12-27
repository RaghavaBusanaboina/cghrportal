/** @format */

//schema for organisation details
const mongoose = require("mongoose");
const moment = require("moment");
try {
  const companydetailsSchema = mongoose.Schema({
    ADate: {
      type: Date,
      default: Date.now,
    },
    organisation: {
      type: String,
      minlength: 4,
    },
    established: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      minlength: 5,
      required: true,
    },
    companyIdCode: {
      type: String,
      minlength: 1,
      required: true,
    },
    companyMailId: {
      type: String,
      minlength: 5,
      required: true,
    },
    companyContactNumber: {
      type: String,
      minlength: 10,
      required: true,
    },
    createdOn: {
      type: String,
      default: function date() {
        let date = new Date();
        let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return moment(d1).format("DD/MM/YYYY");
      },
    },
  });

  const companytimingsSchema = mongoose.Schema({
    organisation: {
      type: String,
      minlength: 4,
    },
    inTime: {
      type: String,
      required: true,
    },
    outTime: {
      type: String,
      required: true,
    },
  });
  const CompanyTimings = mongoose.model("companytimings", companytimingsSchema);
  const Companydetails = mongoose.model("companydetails", companydetailsSchema);
  exports.Companydetails = Companydetails;
  exports.CompanyTimings = CompanyTimings;
} catch (error) {
  console.log(`company profile model${err}`);
}
