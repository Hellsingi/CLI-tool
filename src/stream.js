const fs = require("fs");
const path = require("path");
const exitProcess = require("./exitProcess");
const isPathCorrect = require("./validatePath");

const readStreamFunc = (input) => {
  return input
    ? isPathCorrect(input)
      ? fs.createReadStream(path.join(__dirname, "..", input))
      : exitProcess(`Error an input file path: ${input}`, 1)
    : process.stdin;
};

const writeStreamFunc = (output) => {
  return output
    ? isPathCorrect(output)
      ? fs.createWriteStream(path.join(__dirname, "..", output), {
          flags: "a+",
        })
      : exitProcess(`Error an output file path: ${output}`, 1)
    : process.stdout;
};

module.exports = {
  readStreamFunc,
  writeStreamFunc,
};
