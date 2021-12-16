/** @format */

var jwt = require("jsonwebtoken");
const config = require("config");

var { EmployeeLogin } = require("../models/userLogin");

var createToken = async function (
  req,
  EmployeeId,
  device,
  EmployeeName,
  Password,
  organisation
) {
  var ip =
    (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
    req.socket.remoteAddress;

  const user_logins = await EmployeeLogin.find({
    EmployeeId: EmployeeId,
    token_deleted: false,
    ip_address: ip,
    device: device,
  });
  user_logins.forEach(async (login) => {
    if (login) {
      login.token_deleted = true;
      await login.save();
    }
  });

  const token = await new EmployeeLogin({
    EmployeeId: EmployeeId,
    ip_address: ip,
    device: device,
  });

  const accessToken = await jwt.sign(
    {
      EmployeeId: EmployeeId,
      EmployeeName: EmployeeName,
      Password: Password,
      organisation: organisation,
    },
    config.get("jwtPrivateKey")
  );
  return accessToken;
};

exports.createToken = createToken;
