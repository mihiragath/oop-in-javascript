function nextGreater(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        found = arr[j];
        break;
      }
    }
    result.push(found);
  }
  console.log(result);
}

console.log(nextGreater([4, 5, 2, 25]));
