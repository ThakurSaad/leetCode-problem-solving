/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function (num) {
  const half = num / 2;

  if (!Number.isInteger(half)) return false;

  let result = 0;

  for (let i = 1; i <= half; i++) {
    if (num % i == 0) {
      result += i;
    }
  }

  if (result == num) return true;

  return false;
};
