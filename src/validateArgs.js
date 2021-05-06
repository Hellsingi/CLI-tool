const exitProcess = require("./exitProcess");

const DECODE = "decode";
const ENCODE = "encode";

function validateArgs(shift, actionType) {
  let error;
  if (!Number.isInteger(+shift)) {
    error = "The shift value must be an integer!";
  }

  if (actionType !== DECODE && actionType !== ENCODE)
    error =
      "Please enter the required valid action argument ( decode/encode )!";

  if (error) exitProcess(error, 1);

  return;
}

module.exports = validateArgs;
