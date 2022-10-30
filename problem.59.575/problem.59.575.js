/**
 * @param {number[]} candyType
 * @return {number}
 */

var distributeCandies = function (candyType) {
  const half = candyType / 2;
  const hash = {};
  let type = 0;

  for (const candy of candyType) {
    hash[candy] = hash[candy] + 1 || (1 && type++);
  }

  if (type < half) return type;
  else return half;
};
