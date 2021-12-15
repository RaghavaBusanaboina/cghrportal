/** @format */

// schema for to register hr/admin
const mongoose = require("mongoose");
const config = require("config");
const Joi = require("joi");
const moment = require("moment");
const jwt = require("jsonwebtoken");

try {
  const registerHrSchema = mongoose.Schema({
    Name: {
      type: String,
      required: true,
      minlength: 5,
    },
    Password: {
      type: String,
      required: true,
      minlength: 5,
    },
    organisation: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    Email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    createdOn: {
      type: String,
      default: function date() {
        let date = new Date();
        let d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return moment(d1).format("DD/MM/YYYY");
      },
    },
    Date: {
      type: Date,
      default: Date.now,
    },
  });
  //   registerHrSchema.methods.generateAuthToken = function () {
  //     const token = jwt.sign({ isAdmin: this.isAdmin }, "PrivateKey");
  //     return token;
  //   };
  const RegisterHr = mongoose.model("RegisterHr", registerHrSchema);

  function validateRegister(hr) {
    const schema = Joi.object({
      Name: Joi.string()
        .pattern(/^[a-z]+$/)
        .min(5)
        .required(),
      Password: Joi.string().min(5).required(),
      Email: Joi.string().min(5).required(),
      organisation: Joi.string()
        .pattern(/^[a-z]+$/)
        .min(3)
        .required(),
    });
    return schema.validate(hr);
  }
  function validateLogin(hr) {
    const schema = Joi.object({
      Email: Joi.string().min(3).required(),
      Password: Joi.string().min(5).required(),
    });
    return schema.validate(hr);
  }
  generateAuthToken = (isAdmin, Email, Name, organisation) => {
    const token = jwt.sign(
      {
        isAdmin: isAdmin,
        Email: Email,
        Name: Name,
        organisation: organisation,
      },
      config.get("jwtPrivateKey")
    );
    console.log(token);
    return token;
  };
  exports.generateAuthToken = generateAuthToken;
  exports.RegisterHr = RegisterHr;
  exports.validateRegister = validateRegister;
  exports.validateLogin = validateLogin;
} catch (error) {
  console.log(`${err}`);
}
