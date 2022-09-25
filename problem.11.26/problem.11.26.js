var removeDuplicates = function (nums) {
  const set = new Set(nums);
  const arr = [...set];

  nums.splice(0, nums.length);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    nums.push(element);
  }
};
