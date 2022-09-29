/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const ht = {};

  for (const num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }

  let result;

  for (const num in ht) {
    if (ht[num] >= 2) return (result = true);
    else result = false;
  }

  return result;
};
