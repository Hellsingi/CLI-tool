const parseArguments = require("./src/parseArg");
const validateArgs = require("./src/validateArgs");

console.log("parseArguments", parseArguments());
const arguments = parseArguments();
validateArgs(arguments.shift, arguments.action);
