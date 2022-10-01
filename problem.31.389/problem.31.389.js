/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function (s, t) {
  for (const char of s) {
    t = t.replace(char, "");
  }
  return t;
};
