let str = "aabbcddee";

let freq = {};

// Count frequency
for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}

// Find first non-repeating character
for (let i = 0; i < str.length; i++) {
  if (freq[str[i]] === 1) {
    console.log(str[i]);
    break;
  }
}
