/**
 * @param {string} s
 * @return {boolean}
 */

var checkRecord = function (s) {
  let A = 0;

  for (let i = 0; i < s.length; i++) {
    const prev = s[i - 1];
    const curr = s[i];
    const next = s[i + 1];

    if (prev == "L" && curr == "L" && next == "L") {
      return false;
    } else if (curr == "A") A++;
  }

  if (A < 2) return true;
  else return false;
};

const one = checkRecord("PPALLP");
const two = checkRecord("PPALLL");
console.log(one, two);
