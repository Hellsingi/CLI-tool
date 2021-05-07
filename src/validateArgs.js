const { DECODE_ACTION, ENCODE_ACTION } = require("./constants");
const exitProcess = require("./exitProcess");

function validateArgs(shift, actionType) {
  let error;
  if (!Number.isInteger(+shift)) {
    error = "The shift value must be an integer!";
  }

  if (actionType !== DECODE_ACTION && actionType !== ENCODE_ACTION)
    error = `Please enter the required valid action argument ( ${DECODE_ACTION}/${ENCODE_ACTION} )!`;

  if (error) exitProcess(error, 1);

  return;
}

module.exports = validateArgs;
