/** @format */
//token generation
var jwt = require("jsonwebtoken");
var customId = require("custom-id");
const config = require("config");
var { EmployeeLogin } = require("../models/userLogin");
try {
  async function createToken(
    EmployeeId,
    device,
    EmployeeName,
    Password,
    organisation,
    ip
  ) {
    const token_id = customId({
      EmployeeId: EmployeeId,
      date: Date.now(),
      randomLength: 4,
    });
    const token_secret = customId({
      token_secret: ip,
      date: Date.now(),
      randomLength: 8,
    });
    const user_logins = await EmployeeLogin.find({
      EmployeeId: EmployeeId,
      token_deleted: false,
      ip_address: ip,
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
      token_id: token_id,
      token_secret: token_secret,
    });
    token.save();
    console.log(token);
    const accessToken = jwt.sign(
      {
        EmployeeId: EmployeeId,
        EmployeeName: EmployeeName,
        Password: Password,
        organisation: organisation,
        token_id: token_id,
        ip_address: ip,
      },
      {expiresIn="12h"},
      config.get("jwtPrivateKey")
    );
    console.log(accessToken);
    return accessToken;
  }
  exports.createToken = createToken;
} catch (error) {
  console.log(new Error(error));
}
