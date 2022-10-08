/**
 * @param {string} s
 * @return {number}
 */

var countSegments = function (s) {
  const arr = s.split(" ");
  let result = 0;

  for (const char of arr) {
    if (char != "") result += 1;
  }
  return result;
};
