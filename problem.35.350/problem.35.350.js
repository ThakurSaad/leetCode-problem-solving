/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];

    for (let j = 0; j < nums2.length; j++) {
      const n2 = nums2[j];

      if (n1 === n2) {
        arr.push(n2);

        const idx = nums2.indexOf(n2);

        nums2.splice(idx, 1);

        break;
      }
    }
  }
  return arr;
};
