var nextGreaterElement = function (nums1, nums2) {
  let ans = [];

  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let found = -1;

    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        found = nums2[j];
        break;
      }
    }

    ans.push(found);
  }

  return ans;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2)); // [-1, 3, -1]