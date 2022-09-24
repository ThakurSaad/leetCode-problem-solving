var removeElement = function (nums, val) {
  let keeper = [];

  for (const num of nums) {
    if (num != val) {
      keeper.push(num);
    }
  }

  nums.splice(0, nums.length);

  for (const num of keeper) {
    nums.push(num);
  }

  return nums.length;
};
