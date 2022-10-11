/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function (num) {
  const arr = num.toString(2).split("");

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];

    if (n == 1) {
      const idx = arr.indexOf(n, i);
      arr.splice(idx, 1, "0");
    } else if (n == 0) {
      const idx = arr.indexOf(n, i);
      arr.splice(idx, 1, "1");
    }
  }

  const result = arr.join("");
  return parseInt(result, 2);
};
