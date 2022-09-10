var twoSum = function (nums, target) {
  let result = [];
  let check = [];

  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];

    for (let i = 0; i < nums.length; i++) {
      const n2 = nums[i];
      const indexN1 = nums.indexOf(n1);
      const indexN2 = nums.indexOf(n2, i);

        console.log(n1, n2, "indexN1:", indexN1, "indexN2:", indexN2);
    }
  }
  console.log("check:", check);
  return result;
};

const response = twoSum([3, 3, 3, 1], 6);
console.log(response);
