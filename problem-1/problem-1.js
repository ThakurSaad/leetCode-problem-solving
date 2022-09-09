var runningSum = function (nums) {
  let keeperNums = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    keeperNums.push(num);

    let keeper = 0;
    for (let j = 0; j < keeperNums.length; j++) {
      const keeperNum = keeperNums[j];
      keeper = keeper + keeperNum;
    }

    result.push(keeper);
  }

  return result;
};
