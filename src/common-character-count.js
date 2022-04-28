const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a = [];
  let b = [];
  let count = 0;

  s1.length > s2.length ? ((b = s2), (a = s1)) : ((b = s1), (a = s2));

  for (let el of a) {
    if (b.includes(el)) {
      count++;
      b = b.replace(b[b.indexOf(el)], "");
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
