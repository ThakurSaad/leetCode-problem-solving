/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  const ht = {};

  for (const char of s) {
    ht[char] = ht[char] + 1 || 1;
  }

  let uniqueChar;

  for (const key in ht) {
    if (ht[key] === 1) {
      uniqueChar = key;
      return s.indexOf(uniqueChar);
    }
  }
  return -1;
};
