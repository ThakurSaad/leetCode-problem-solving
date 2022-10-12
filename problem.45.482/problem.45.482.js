/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var licenseKeyFormatting = function (s, k) {
  let result = "";
  let count = 0;
  let i = s.length - 1;

  while (i >= 0) {
    const char = s[i];

    if (char == "-") {
      i--;
    } else if (count != 0 && count % k == 0) {
      result = "-" + result;
      count = 0;
    } else {
      result = char.toUpperCase() + result;
      count++;
      i--;
    }
  }
  return result;
};
