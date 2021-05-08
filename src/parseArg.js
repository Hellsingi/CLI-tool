const exitProcess = require("./exitProcess.js");

const argsReceived = process.argv.slice(2);
const argsTypes = ["-i --input", "-a --action", "-s --shift", "-o --output"];
const map = new Map();
const argsAnswer = {};

function parseArguments() {
  for (let i = 0; i < argsReceived.length; i = i + 2) {
    const findIndexArg = argsTypes.findIndex((type) => {
      const splittedType = type.split(" ");
      return (
        argsReceived[i] === splittedType[0] ||
        argsReceived[i] === splittedType[1]
      );
    });

    if (findIndexArg !== -1) {
      const foundType = argsTypes[findIndexArg];
      if (!map.has(foundType)) {
        map.set(foundType, argsReceived[i + 1]);
      }
    } else {
      exitProcess(
        `Not correct command => "${argsReceived[i]}", please re-entered`,
        1
      );
    }
  }

  map.forEach(function (value, key) {
    const commandKey = key.split(" ")[1].slice(2);
    argsAnswer[commandKey] = value;
  });

  return argsAnswer;
}

module.exports = parseArguments;
