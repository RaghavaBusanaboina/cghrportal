/** @format */

//schema for holidays
const mongoose = require("mongoose");
try {
  const holidaysSchema = mongoose.Schema({
    organisation: {
      type: String,
    },
    last_updated_on: {
      type: Date,
      default: Date.now,
    },
    holidays: [
      {
        date: { type: String },
        festival: { type: String },
        Adate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  });
  const Holidays = mongoose.model("holidays", holidaysSchema);
  exports.Holidays = Holidays;
} catch (error) {
  console.log(`validateHolidaydata--->${err}`);
}
