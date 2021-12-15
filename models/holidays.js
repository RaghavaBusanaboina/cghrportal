/** @format */

//schema for holidays
const mongoose = require("mongoose");
const Joi = require("joi");
try {
  const holidaysSchema = mongoose.Schema({
    organisation: {
      type: String,
    },
    last_updated_on: {
      type: Date,
      default: Date.now,
    },
    holidays: { type: Array },
  });
  const Holidays = mongoose.model("holidays", holidaysSchema);
  function validateHolidaydata(holiday) {
    const schema = Joi.object({
      holidays: Joi.array().required(),
    });
    return schema.validate(holiday);
  }
  exports.Holidays = Holidays;
  exports.validateHolidaydata = validateHolidaydata;
} catch (error) {
  console.log(`validateHolidaydata--->${err}`);
}
