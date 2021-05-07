const { pipeline } = require("stream");

const parseArguments = require("./src/parseArg");
const validateArgs = require("./src/validateArgs");
const {
  readStreamFunc,
  writeStreamFunc,
  transformStream,
} = require("./src/stream");
const caesarShift = require("./src/caesarCipher.js");

const { action, shift, input, output } = parseArguments();
validateArgs(shift, action);

const readStream = readStreamFunc(input);
const writeStream = writeStreamFunc(output);
const transform = new transformStream(caesarShift, action, shift);

pipeline(readStream, transform, writeStream, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  } else {
    console.log("Pipeline succeeded.");
  }
});
