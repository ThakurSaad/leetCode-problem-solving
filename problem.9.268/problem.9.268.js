/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const finder = nums.find((num) => num === nums.length);

  if (finder) {
    const sortedNums = nums.sort();

    for (let i = 0; i < sortedNums.length; i++) {
      const sortedNum = sortedNums[i];
      if (sortedNum === i) {
        continue;
      } else {
        return i;
      }
    }
  } else {
    return nums.length;
  }
};
