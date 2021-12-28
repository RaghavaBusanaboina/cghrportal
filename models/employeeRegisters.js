/** @format */

//schema for emp registers
const mongoose = require("mongoose");
const Joi = require("joi");
const moment = require("moment");
try {
  const employeeRegistersSchema = mongoose.Schema({
    isTerminated: {
      type: Boolean,
      default: false,
    },
    ADate: {
      type: Date,
      default: Date.now,
    },
    EmployeeId: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
    },
    EmployeeName: {
      type: String,
      required: true,
      minlength: 5,
    },
    Password: {
      type: String,
      default: "12345",
      // default: Math.random().toString(36).slice(-8),
      minlength: 5,
    },
    organisation: {
      type: String,
    },
    joiningDate: {
      type: String,
      required: true,
    },
    AgreementYears: {
      type: Number,
      min: 0,
      max: 3,
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
    NetSalary: {
      type: Number,
      minlength: 10000,
      maxlength: 60000,
      required: true,
    },
    Role: {
      type: String,
      minlength: 3,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    Phone: {
      type: Number,
      maxlength: 10,
      minlength: 10,
      required: true,
      unique: true,
    },
    DateOfBirth: {
      type: String,
      required: true,
      trim: true,
    },
    EducationalDetails: [
      {
        qualification: {
          type: String,
          default: "",
        },
        institute: {
          type: String,
          default: "",
        },
        passedoutYear: {
          type: Number,
          default: 0,
        },
        percentage: {
          type: Number,
          default: 0,
        },
        last_updated_on: { type: Date, default: "" },
      },
    ],
    profile: {
      FirstName: {
        type: String,
        default: "",
      },

      MiddleName: {
        type: String,
        default: "",
      },
      LastName: {
        type: String,
        default: "",
      },
      fatherName: {
        type: String,
        default: "",
      },
      motherName: {
        type: String,
        default: "",
      },
      emergencyNumber: {
        type: Number,
        max: 10,
        default: 0000000000,
      },
      Address: {
        type: String,
        default: "",
      },
      City: {
        type: String,
        default: "",
      },
      Country: {
        type: String,
        default: "",
      },
      Pincode: {
        type: Number,
        default: 0,
      },
      emergencyAddress: {
        type: String,
        default: "",
      },

      AboutMe: {
        type: String,
        default: "",
      },
      last_updated_on: { type: Date, default: "" },
    },
    jobExperiences: [
      {
        companyName: {
          type: String,
          default: "",
        },
        Experience: {
          type: String,
          default: "",
        },
        Role: {
          type: String,
          default: "",
        },
        from_upto: {
          type: String,
          default: "",
        },
        last_updated_on: { type: Date, default: Date.now },
      },
    ],
  });
  const EmployeeRegisters = mongoose.model(
    "EmployeeRegisters",
    employeeRegistersSchema
  );
  exports.EmployeeRegisters = EmployeeRegisters;
} catch (error) {
  console.log(`Employee registers${err}`);
}
