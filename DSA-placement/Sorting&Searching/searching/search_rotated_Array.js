function search(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    // left sorted
    if (arr[low] <= arr[mid]) {
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // right sorted
    else {
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
