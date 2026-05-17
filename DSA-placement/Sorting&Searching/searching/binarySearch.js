let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targett = 5;

let left = 0;
let right = a.length - 1;
while (left <= right) {
  let middle = Math.floor((left + right) / 2);

  if (a[middle] === targett) {
    console.log("Element found at index: " + middle);
    break;
  } else if (a[middle] < targett) {
    left = middle + 1;
  } else {
    right = middle - 1;
  }
}

//usign recursion
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Element not found
  }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle; // Element found at index
  } else if (arr[middle] < target) {
    return binarySearch(arr, target, middle + 1, right); // Search in the right half
  } else {
    return binarySearch(arr, target, left, middle - 1); // Search in the left half
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
let result = binarySearch(arr, target);
if (result !== -1) {
  console.log("Element found at index: " + result);
} else {
  console.log("Element not found");
}
