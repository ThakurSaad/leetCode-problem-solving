/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
  const xor = x ^ y;

  const binary = xor.toString(2);

  const unMatched = binary.replace(/0/g, "");

  return unMatched.length;
};
