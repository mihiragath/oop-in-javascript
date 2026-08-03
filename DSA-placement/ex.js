let arr = [1, 2, 7, 5, 4, 3, 6];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let found = -1;
  for (j = i; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      found = arr[j];
    }
  }
  result.push(found);
}
console.log(result);
