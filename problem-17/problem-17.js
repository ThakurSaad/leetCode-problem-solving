/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  for (const num of nums) {
    if (num === target) {
      return nums.indexOf(num);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prev = nums[i - 1];
    const next = nums[i + 1];

    if (!prev && num > target) {
      return 0;
    }

    if (!next && num < target) {
      console.log("prev:", prev, "num:", num, "next:", next);
      return nums.indexOf(num) + 1;
    }

    if (prev < target && num > target) {
      return nums.indexOf(num);
    }
  }
};
