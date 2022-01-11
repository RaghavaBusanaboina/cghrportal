/** @format */

const tige = require("tiger-balm");
const config = require("config");

var pssd = config.get("PaSSD");
var salt = config.get("SaLt");
module.exports = {
  encrypt: (value) => {
    try {
      return tige.encrypt(pssd, salt, value);
    } catch (error) {
      return error;
    }
  },
  decrypt: (value) => {
    try {
      return tige.decrypt(pssd, salt, value);
    } catch (error) {
      return error;
    }
  },
  decryptarr: (value) => {
    try {
      return JSON.parseFloat(tige.decrypt(pssd, salt, value));
    } catch (error) {
      console.log(error);

      return "tberror";
    }
  },
};

// console.log(module.exports.encrypt("hei"));
// console.log(module.exports.decrypt("71f0acc17e4f67a94f7be6733ccff7fc"));
