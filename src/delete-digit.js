const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let a = [];
  let result = [];

  n = n.toString().split("");

  for (let i = 0; i < n.length; i++) {
    n.forEach((el, index) => {
      if (index !== i) {
        a.push(el);
      }
    });

    result.push(a.join(""));
    a.length = 0;
  }

  result = result.sort((a, b) => b - a);

  return Math.max(...result);
}

module.exports = {
  deleteDigit,
};
