/** @format */

//schema for organisation details
const mongoose = require("mongoose");
const Joi = require("joi");
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
      minlength: 5,
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

  function validatecompanytimingsdata(companytimings) {
    const schema = Joi.object({
      inTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
      outTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    });
    return schema.validate(companytimings);
  }
  function validatecompanydata(companydetails) {
    const schema = Joi.object({
      established: Joi.string().min(3).required(),
      type: Joi.string().min(5).required(),
      companyIdCode: Joi.string().regex(/[A-Z]/).required(),
      companyMailId: Joi.string().min(5).email().required(),
      companyContactNumber: Joi.string()
        .length(10)
        .pattern(/^[6-9]{1}[0-9]{9}$/)
        .required(),
    });
    return schema.validate(companydetails);
  }
  exports.Companydetails = Companydetails;
  exports.validatecompanydata = validatecompanydata;
  exports.CompanyTimings = CompanyTimings;
  exports.validatecompanytimingsdata = validatecompanytimingsdata;
} catch (error) {
  console.log(`company profile model${err}`);
}
