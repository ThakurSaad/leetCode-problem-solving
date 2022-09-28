/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let letters = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char.match(/[0-9a-z]/i)) {
      letters += char.toLowerCase();
    }
  }

  const reversed = letters.split("").reverse().join("");

  if (letters === reversed) return true;
  else return false;
};
