/** @format */

//schema for organisation details
const mongoose = require("mongoose");
const Joi = require("joi");
const moment = require("moment");
try {
  const settingsSchema = mongoose.Schema({
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
    inTime: {
      type: String,
      required: true,
    },
    outTime: {
      type: String,
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
  const AdminSettings = mongoose.model("settings", settingsSchema);
  function validatesettingsdata(setting) {
    const schema = Joi.object({
      established: Joi.string().min(3).required(),
      type: Joi.string().min(5).required(),
      inTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
      outTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    });
    return schema.validate(setting);
  }
  exports.AdminSettings = AdminSettings;
  exports.validatesettingsdata = validatesettingsdata;
} catch (error) {
  console.log(`AdminSettings${err}`);
}
