var twoSum = function (nums, target) {
  let result;

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];

    for (let j = 0; j < nums.length; j++) {
      const num2 = nums[j];

      if (i === j) {
        continue;
      }

      const sum = num1 + num2;

      if (sum === target) {
        result = [nums.indexOf(num1), nums.indexOf(num2, j)];
        return result;
      }
    }
  }
};
