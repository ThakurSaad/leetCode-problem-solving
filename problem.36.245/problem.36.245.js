/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      vowels += char;

      s = s.replace(char, "~0~");
    }
  }

  const reverseVowels = [...vowels].reverse().join("");

  for (let i = 0; i < reverseVowels.length; i++) {
    s = s.replace("~0~", reverseVowels[i]);
  }
  return s;
};
