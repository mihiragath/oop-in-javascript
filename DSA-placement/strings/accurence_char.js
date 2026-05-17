let s = "abbacffghiij";
let charCount = {};

for (let i = 0; i < s.length; i++) {
  let char = s[i];
  charCount[char] = (charCount[char] || 0) + 1;
}
console.log(charCount);

//another method
let charCountt = {};
for (let i = 0; i < s.length; i++) {
  let char = s[i];
  if (charCountt[char]) {
    charCountt[char]++;
  } else {
    charCountt[char] = 1;
  }
}
console.log(charCount);
