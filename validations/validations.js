/** @format */

const Joi = require("joi");
const { JoiPassword } = require("joi-password");
const moment = require("moment");
function validatePassword(data) {
  const schema = Joi.object({
    oldPassword: Joi.string().min(3).required(),
    newPassword: JoiPassword.string()
      .min(8)
      .max(12)
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required()
      .messages({
        "password.minOfUppercase":
          "password contains atleast 1 uppercase letter",
        "password.minOfLowercase":
          "password contains atleast 1 lowercase letter",
        "password.minOfSpecialCharacters":
          "password contains atleast 1 special character",
        "password.minOfNumeric": "password contains atleast 1 number",
        "password.noWhiteSpaces": "password doestnot contains any space",
      }),
    conformPassword: JoiPassword.string()
      .min(8)
      .max(12)
      .minOfSpecialCharacters(1)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .noWhiteSpaces()
      .required()
      .messages({
        "password.minOfUppercase":
          "password contains atleast 1 uppercase letter",
        "password.minOfLowercase":
          "password contains atleast 1 lowercase letter",
        "password.minOfSpecialCharacters":
          "password contains atleast 1 special character",
        "password.minOfNumeric": "password contains atleast 1 number",
        "password.noWhiteSpaces": "password doestnot contains any space",
      }),
  });

  return schema.validate(data);
}
function validateLogin(emp) {
  const schema = Joi.object({
    Email: Joi.string().min(5).required(),
    Password: Joi.string().min(5).required(),
  });
  return schema.validate(emp);
}
function validateinTime(data) {
  const schema = Joi.object({
    inTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    timelimit: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  });
  return schema.validate(data);
}
function validateoutTime(data) {
  const schema = Joi.object({
    outTime: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  });
  return schema.validate(data);
}
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
    qualification: Joi.string().required(),
    institute: Joi.string().min(3).max(50).required(),
    passedoutYear: Joi.number()
      .integer()
      .max(Number(date.getFullYear()))
      .required(),
    percentage: Joi.number().integer().max(100).required(),
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
    Country: Joi.string().min(3).required(),
    Pincode: Joi.string()
      .pattern(/^[0-9]{6}$/)
      .required(),
    emergencyAddress: Joi.string().min(3).required(),
    AboutMe: Joi.string().min(3).required(),
    last_updated_on: Joi.date(),
  });
  return schema.validate(profile);
}
function validateemployeeTermination(employee) {
  const schema = Joi.object({
    EmployeeId: Joi.string().min(5).required(),
    Email: Joi.string().required(),
    EmployeeName: Joi.string().min(5).required(),
    Phone: Joi.number().required(),
    organisation: Joi.string().min(3).required(),
    Reason: Joi.string().min(3).required(),
    From: Joi.string().min(3).required(),
    ExperienceHere: Joi.string().required(),
    EmployeeRecord: Joi.array().required(),
    AgreementDone: Joi.string().valid("Yes", "No").required(),
  });
  return schema.validate(employee);
}
function validateHolidaydata(holiday) {
  const schema = Joi.object({
    holidays: Joi.array().required(),
  });
  return schema.validate(holiday);
}
function validateEmployeeLeave(employeeleave) {
  const schema = Joi.object({
    EmployeeId: Joi.string().min(3),
    EmployeeName: Joi.string().min(3).max(50),
    To: Joi.string().min(4).required(),
    from_Date: Joi.string().required(),
    to_Date: Joi.string().required(),
    subject: Joi.string().min(5).max(100).required(),
    reason: Joi.string().min(5).max(255).required(),
    leave_type: Joi.string().min(4).required(),
    organisation: Joi.string(),
  });
  console.log("123", schema.validate(employeeleave));
  return schema.validate(employeeleave);
}
function validateRegister(hr) {
  const schema = Joi.object({
    Name: Joi.string()
      .pattern(/^[a-z A-Z]+$/)
      .min(5)
      .required(),
    Password: Joi.string().min(5).required(),
    Email: Joi.string().min(5).required(),
    organisation: Joi.string()
      .pattern(/^[a-z A-Z]+$/)
      .min(3)
      .required(),
  });
  return schema.validate(hr);
}
function validateLoginhr(hr) {
  const schema = Joi.object({
    Email: Joi.string().min(3).required(),
    Password: Joi.string().min(5).required(),
  });
  return schema.validate(hr);
}
function validateEmployeelogindata(login) {
  const schema = Joi.object({
    EmployeeId: Joi.string().min(3).required(),
    logged_out: Joi.boolean().required,
    ip_address: Joi.string().required(),
    token_deleted: Joi.bool(),
    device: Joi.string().required(),
    token_id: Joi.string(),
    token_secret: Joi.string(),
  });
  return schema.validate(login);
}
exports.validateEmployeeLeave = validateEmployeeLeave;
exports.validatePassword = validatePassword;
exports.validateLogin = validateLogin;
exports.validateinTime = validateinTime;
exports.validateoutTime = validateoutTime;
exports.validatecompanydata = validatecompanydata;
exports.validatecompanytimingsdata = validatecompanytimingsdata;
exports.validateEmployeedata = validateEmployeedata;
exports.validateEducationaldetails = validateEducationaldetails;
exports.validateprofile = validateprofile;
exports.validateemployeeTermination = validateemployeeTermination;
exports.validateHolidaydata = validateHolidaydata;
exports.validateRegister = validateRegister;
exports.validateLoginhr = validateLoginhr;
exports.validateEmployeelogindata = validateEmployeelogindata;
// const {
//   validatePassword,
//   validateLogin,
//   validateinTime,
//   validateoutTime,
//   validateEmployeeLeave,
//   validatecompanydata,
//   validatecompanytimingsdata,
//   validateEmployeedata,
//   validateEducationaldetails,
//   validateprofile,
//   validateemployeeTermination,
//   validateHolidaydata,
//   validateRegister,
//   validateLoginhr,
//   validateEmployeelogindata

// } = require("../validations/validations");
