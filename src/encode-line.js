const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split("");
  let acc = 1;
  let result = [];
  str.forEach((el, i) => {
    str[i] == str[i + 1] ? acc++ : (result.push(acc, el), (acc = 1));
  });
  return result.filter((el) => el !== 1).join("");
}

module.exports = {
  encodeLine,
};
