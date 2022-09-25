var singleNumber = function (nums) {
  function sorted(nums) {
    const result = nums.sort((a, b) => a - b);
    return result;
  }

  const arr = sorted(nums);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const prev = arr[i - 1];
    const next = arr[i + 1];

    if (num != prev && num != next) {
      return num;
    }
  }
};

const one = singleNumber([2, 2, 1]);
console.log("one:", one);
const two = singleNumber([4, 1, 2, 1, 2]);
console.log(two);
const three = singleNumber([1]);
console.log(three);
/* const two =  */ singleNumber([4, 4, 1, 2, 1, 11, 11, 11, 11, 11, 2]);
