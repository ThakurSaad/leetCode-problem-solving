/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  if (s.length === 1) return 1;

  arr = s.split(" ");

  for (let i = arr.length - 1; (i) => 0; i--) {
    const element = arr[i];

    if (element !== "") {
      return element.length;
    } else if (!element) {
      if (element === "") continue;
      return 1;
    }
  }
};
