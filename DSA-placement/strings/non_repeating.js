//First Non-Repeating Character
let str = "swissw";
let charCount = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

let firstNonRepeatingChar = null;
for (let i = 0; i < str.length; i++) {
  let char = str[i];
    if (charCount[char] === 1) {
        firstNonRepeatingChar = char;
        break;
    }   
}
console.log(firstNonRepeatingChar);

//without using object
let firstNonRepeatingChar1 = null;
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[j] === char) {
            count++;
        }
    }
    if (count === 1) {
        firstNonRepeatingChar1 = char;
        break;
    }
}
console.log(firstNonRepeatingChar1);

