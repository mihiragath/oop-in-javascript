let a = [1, 2, 3, 4, 5, 1, 2];
function findPeakElement(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low; // or high, both are the same at this point
}
console.log(findPeakElement(a));
