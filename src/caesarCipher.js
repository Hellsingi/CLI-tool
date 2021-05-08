const {
  UPPER_CASE_LOWER_BOUND,
  UPPER_CASE_UPPER_BOUND,
  LETTERS_IN_ALPHABET,
  LOWER_CASE_LOWER_BOUND,
  LOWER_CASE_UPPER_BOUND,
} = require("./constants");

function caesarShift(str, shift) {
  if (shift < 0) return caesarShift(str, shift + LETTERS_IN_ALPHABET);
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if (code >= UPPER_CASE_LOWER_BOUND && code <= UPPER_CASE_UPPER_BOUND) {
        c = String.fromCharCode(
          ((code - UPPER_CASE_LOWER_BOUND + shift) % LETTERS_IN_ALPHABET) +
            UPPER_CASE_LOWER_BOUND
        );
      } else if (
        code >= LOWER_CASE_LOWER_BOUND &&
        code <= LOWER_CASE_UPPER_BOUND
      ) {
        c = String.fromCharCode(
          ((code - LOWER_CASE_LOWER_BOUND + shift) % LETTERS_IN_ALPHABET) +
            LOWER_CASE_LOWER_BOUND
        );
      }
    }
    output += c;
  }
  return `${output}`;
}

module.exports = caesarShift;
