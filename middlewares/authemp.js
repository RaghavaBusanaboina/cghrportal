/** @format */
const jwt = require("jsonwebtoken");
const config = require("config");
var requestIp = require("request-ip");
const encdec = require("../helperFunctions/enc-dec");

const { EmployeeLogin } = require("../models/userLogin");
const { TokenBlackList } = require("../models/blackListToken");
const { EmployeeRegisters } = require("../models/employeeRegisters");
const { EmployeeTermination } = require("../models/employeeTermination");
// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");
//   if (!token)
//     return res.status(401).send("Access denied. No token providedae.");
//   try {
//     const decoded = jwt.verify(token, "PrivateKey");
//     console.log(decoded);
//     req.user = decoded;
//     next();
//     return decoded;
//   } catch (ex) {
//     console.log(`${ex}`);
//     res.status(400).send(`issueeeeeee${ex}`); //("Session Expired! Please Login Again");
//   }
// };

module.exports = async function (req, res, next) {
  var token = req.headers["x-auth-token"];
  var token = encdec.decrypt(token);

  if (!token)
    return res.status(404).send("Access denied. No token providedae.");

  await TokenBlackList.findOne({ token: token }).then((found) => {
    if (found) {
      jwt.verify(token, config.get("jwtPrivateKey"), async (err, payload) => {
        if (payload.ip_address !== requestIp.getClientIp(req)) {
          return res.status(401).send("ip changed plz login again");
        }
        const login = await EmployeeLogin.findOne({
          EmployeeId: payload.EmployeeId,
          token_id: payload.token_id,
          // ip_address: payload.ip_address,
        });
        login.logged_out = true;
        login.token_deleted = true;
        await login.save();
      });
      details = {
        Status: "Failure",
        Details: "Token blacklisted. Cannot use this token.",
      };
      return res.status(401).json(details);
    } else {
      jwt.verify(token, config.get("jwtPrivateKey"), async (err, payload) => {
        if (err) return res.sendStatus(403);
        if (payload) {
          const login = await EmployeeLogin.findOne({
            EmployeeId: payload.EmployeeId,
            token_id: payload.token_id,
            // ip_address: payload.ip_address,
          });

          if (login.token_deleted === true) {
            if (payload.ip_address !== requestIp.getClientIp(req)) {
              return res.status(401).send("ip changed plz login again");
            }
            const blacklist_token = new TokenBlackList({
              token: token,
            });
            await blacklist_token.save();
            details = {
              Status: "Failure",
              Details: "Token blacklisted. Cannot use this token.",
            };

            return res.status(401).json(details);
          } else {
            const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
            console.log(decoded);
            await EmployeeRegisters.findOne({
              EmployeeId: decoded.EmployeeId,
              EmployeeName: decoded.EmployeeName,
              isTerminated: true,
            }).then((found) => {
              if (found)
                return res.status(401).send({ data: "Employee terminated1" });
            });
            await EmployeeTermination.findOne({
              EmployeeId: decoded.EmployeeId,
              EmployeeName: decoded.EmployeeName,
            }).then((found) => {
              if (found)
                return res.status(401).send({ data: "Employee terminated" });
            });
            req.user = decoded;
            console.log("else block in authemp");
          }
        }
        next();
      });
    }
  });
};
