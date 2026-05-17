//first accurance 
function firstOccurance(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      result = middle;
      right = middle - 1; // Continue searching in the left half
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
}

//last accurance
function lastOccurance(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      result = middle;
      left = middle + 1; // Continue searching in the right half
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
}

let arr = [1, 2, 2, 3, 4, 5];
let target = 2; 
console.log("First Occurrence: " + firstOccurance(arr, target));
console.log("Last Occurrence: " + lastOccurance(arr, target));
