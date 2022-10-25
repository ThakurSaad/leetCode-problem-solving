/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i = i + 2 * k) {
    const reverse = arr.splice(i, k).reverse();

    arr.splice(i, 0, ...reverse);
  }

  return arr.join("");
};
