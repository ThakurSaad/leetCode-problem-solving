/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (words) {
  return (result = words.filter((w) => {
    return (
      /^[qwertyuiop]*$/i.test(w) ||
      /^[asdfghjkl]*$/i.test(w) ||
      /^[zxcvmnb]*$/i.test(w)
    );
  }));
};
