const fs = require("fs");
const path = require("path");
const stream = require("stream");

const exitProcess = require("./exitProcess");
const isPathCorrect = require("./validatePath");
const { ENCODE_ACTION } = require("./constants");

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

class transformStream extends stream.Transform {
  constructor(func, action, shift) {
    super();
    this.func = func;
    this.shift = this._combine(action, shift);
  }

  _combine(action, shift) {
    return action === ENCODE_ACTION ? +shift : -shift;
  }

  _transform(data, encoding, callback) {
    this.push(this.func(data.toString(), this.shift));
    callback();
  }
}

module.exports = {
  readStreamFunc,
  writeStreamFunc,
  transformStream,
};
