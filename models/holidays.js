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
  exports.Holidays = Holidays;
} catch (error) {
  console.log(`validateHolidaydata--->${err}`);
}
