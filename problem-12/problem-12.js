var merge = function (nums1, m, nums2, n) {
  const merged = [...nums1, ...nums2].sort();
  let newArr = [];

  nums1.splice(0, nums1.length);

  for (let i = 0; i < merged.length; i++) {
    const element = merged[i];

    if (element !== 0) {
      newArr.push(element);
    }
  }

  for (let i = 0; i <= m + n; i++) {
    if (newArr.length < m + n) {
      newArr.push(0);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];

    nums1.push(element);
  }

  nums1.sort(function (a, b) {
    return a - b;
  });
};
