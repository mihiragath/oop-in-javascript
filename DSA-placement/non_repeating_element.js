function firstNonRepeating(arr, k) {
  let ans = [];

  for (let i = 0; i <= arr.length - k; i++) {
    let freq = {};

    for (let j = i; j < i + k; j++) {
      freq[arr[j]] = (freq[arr[j]] || 0) + 1;
    }

    let found = -1;

    for (let j = i; j < i + k; j++) {
      if (freq[arr[j]] === 1) {
        found = arr[j];
        break;
      }
    }

    ans.push(found);
  } 

  return ans;
}

console.log(firstNonRepeating([1, 2, 2, 3, 1, 4], 4));
