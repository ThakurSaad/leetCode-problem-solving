/**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function (word) {
  if (/^[A-Z]*$/.test(word)) {
    return true;
  } else if (/^[a-z]*$/.test(word)) {
    return true;
  }

  let hold = 0;
  const firstChar = word[0];

  for (const char of word) {
    if (char.toUpperCase() == char) {
      hold++;
    }
  }

  if (hold > 1) return false;
  else if (hold == 1 && firstChar.toUpperCase() == firstChar) return true;
  else if (hold == 1 && firstChar.toUpperCase() != firstChar) return false;
};
