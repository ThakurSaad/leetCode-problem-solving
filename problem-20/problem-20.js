/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  const myFunc = (ans) => {
    ans = String(num).split("");

    return ans.reduce((a, b) => +a + +b);
  };

  while (num > 9) {
    num = myFunc(num);
  }

  return num;
};
