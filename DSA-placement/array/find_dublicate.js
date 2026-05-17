let a = [1, 2, 3, 4, 5, 2, 3, 1];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] === a[j]) {
      console.log(a[i]);
    }
  }
}

//reduce time complexity
let arr = [1, 2, 3, 2, 4, 5, 1];

let freq = {};
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];

  if (freq[element]) {
    freq[element]++;

    // add only once
    if (freq[element] === 2) {
      duplicates.push(element);
    }
  } else {
    freq[element] = 1;
  }
}

console.log(duplicates);