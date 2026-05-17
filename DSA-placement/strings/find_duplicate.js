let s = 'hello';
let count = 0;
let freq = {};
for (let i = 0; i < s.length; i++) {
  let char = s[i];
    if (freq[char]) {   
    freq[char]++;
    } else {
    freq[char] = 1;
    }
}

for (let char in freq) {
  if (freq[char] > 1) {
    console.log(char);
  }
}
