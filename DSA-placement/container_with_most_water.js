//container with most water
let arr = [1, 6, 5, 4, 8, 2, 5, 9, 4, 9];
let start = 0;
let end = arr.length - 1;
let maxWater = 0;

while (start < end) {
  let width = end - start;
  let area = Math.min(arr[start], arr[end]) * width;
  maxWater = Math.max(area, maxWater);

  if (arr[start] < arr[end]) {
    start++;
  } else {
    end--;
  }
}
console.log(maxWater);