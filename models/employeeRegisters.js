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
          default: "",
        },
        percentage: {
          type: Number,
          default: "",
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
  function validateEmployeedata(employee) {
    let date = new Date();
    let d1 = new Date(date.getFullYear() - 18, date.getMonth(), date.getDate());
    d1 = moment(d1).format("YYYY/MM/DD");
    const schema = Joi.object({
      EmployeeId: Joi.string().min(3),
      EmployeeName: Joi.string()
        .pattern(/^[a-z A-Z]+$/)
        .min(3)
        .max(50)
        .required(),
      Email: Joi.string().min(5).email().required(),
      Phone: Joi.string()
        .length(10)
        .pattern(/^[6-9]{1}[0-9]{9}$/)
        .required(),

      joiningDate: Joi.string().required(),
      DateOfBirth: Joi.date()
        .messages({ "dateOfBirth.max": "Employee must be 18 years old" })
        .max(d1)
        .required(),
      AgreementYears: Joi.number().min(0).max(3).required(),
      Role: Joi.string()
        .pattern(/^[a-z A-Z]+$/)
        .min(3)
        .max(50)
        .required(),
      NetSalary: Joi.number().min(10000).max(9999999).required(),
    });
    return schema.validate(employee);
  }

  function validateEducationaldetails(educationaldetails) {
    let date = new Date();
    const schema = Joi.object({
      qualification: Joi.string().min(3).required(),
      institute: Joi.string().min(3).max(50).required(),
      passedoutYear: Joi.number().max(date.getFullYear()).required(),
      percentage: Joi.number().max(100).required(),
      last_updated_on: Joi.date(),
    });
    return schema.validate(educationaldetails);
  }

  function validateprofile(profile) {
    const schema = Joi.object({
      FirstName: Joi.string().min(3).required(),
      MiddleName: Joi.string().optional(),
      LastName: Joi.string().min(3).required(),
      fatherName: Joi.string().min(3).required(),
      motherName: Joi.string().min(3).required(),
      emergencyNumber: Joi.string()
        .pattern(/^[6-9]{1}[0-9]{9}$/)
        .required(),
      Address: Joi.string().min(3).required(),
      City: Joi.string().min(3).required(),
      Pincode: Joi.string()
        .pattern(/^[0-9]{6}$/)
        .required(),
      emergencyAddress: Joi.string().min(3).required(),
      AboutMe: Joi.string().min(3).required(),
      last_updated_on: Joi.date(),
    });
    return schema.validate(profile);
  }

  exports.EmployeeRegisters = EmployeeRegisters;
  exports.validateEmployeedata = validateEmployeedata;
  exports.validateEducationaldetails = validateEducationaldetails;
  exports.validateprofile = validateprofile;
} catch (error) {
  console.log(`Employee registers${err}`);
}
