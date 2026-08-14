//longest subarray after deleting 1 element
let arr = [0, 1, 1, 0, 1, 1, 0, 1];
let left = 0;
let zero = 0;
let max = 0;

for (let right = 0; right < arr.length; right++) {
  if (arr[right] === 0) {
    zero++;
  }
  while (zero > 1) {
    if (arr[left] === 0) {
      zero--;
    }
    left++;
  }
  max = Math.max(max, right - left);
}
console.log(max);

//max_consecutive_ones
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
let leftNo = 0;
let maxNo = 0;
let zeroCount = 0;

for (let right = 0; right < nums.length; right++) {
  if (nums[right] === 0) {
    zeroCount++;
  }
  while (zeroCount > k) {
    if (nums[leftNo] === 0) {
      zeroCount--;
    }
    leftNo++;
  }
  maxNo = Math.max(maxNo, right - leftNo + 1);
}
console.log(maxNo);
