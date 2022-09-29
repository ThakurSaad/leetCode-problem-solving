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
  console.log(result);
  return result;
};

// containsDuplicate([1, 2, 3, 4]);
// containsDuplicate([1, 2, 3, 1]);
const one = containsDuplicate([2, 14, 18, 22, 22]);
console.log(one);
// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

// var isIsomorphic = function (s, t) {

// };

// isIsomorphic("egg", "add");
// isIsomorphic("foo", "bar");
