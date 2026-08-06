let arr = [1, 2, 2, 3, 4, 5, 4, 3, 6, 7, 8, 5, 2];
let freq = {};
for (let j = 0; j < arr.length; j++) {
  freq[arr[j]] = (freq[arr[j]] || 0) + 1;
}
let first = null;
let second = null;
for (let key in freq) {
  if (freq[key] > first) {
    second = first
    first = key;
  } else {
    if (freq[key] > second && first > second) second = key;
  }
}
console.log(first, second);
