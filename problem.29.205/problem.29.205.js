/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (!sMap[sChar]) sMap[sChar] = tChar;

    if (!tMap[tChar]) tMap[tChar] = sChar;

    if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) return false;
  }
  return true;
};
