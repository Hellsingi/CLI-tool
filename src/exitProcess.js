function exitProcess(message, code) {
  process.stderr.write(message + "\n");
  process.exit(code);
}

module.exports = exitProcess;
