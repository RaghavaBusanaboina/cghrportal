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
  const RegisterHr = mongoose.model("RegisterHr", registerHrSchema);
  generateAuthToken = (isAdmin, Email, Name, organisation) => {
    const token = jwt.sign(
      {
        isAdmin: isAdmin,
        Email: Email,
        Name: Name,
        organisation: organisation,
      },
      { expiresIn: "12h" },
      config.get("jwtPrivateKey")
    );
    console.log(token);
    return token;
  };
  exports.generateAuthToken = generateAuthToken;
  exports.RegisterHr = RegisterHr;
} catch (error) {
  console.log(`${err}`);
}
