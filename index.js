const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");

const parseArguments = require("./src/parseArg");
const validateArgs = require("./src/validateArgs");
const { readStreamFunc, writeStreamFunc } = require("./src/stream");

const { action, shift, input, output } = parseArguments();
validateArgs(shift, action);

console.log("parseArguments", parseArguments);

const readStream = readStreamFunc(input);

const writeStream = writeStreamFunc(output);

pipeline(readStream, writeStream, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  } else {
    console.log("Pipeline succeeded.");
  }
});
