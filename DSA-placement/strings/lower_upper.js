let s = "abcde";
let upper = "";

for (let i = 0; i < s.length; i++) {
  let char = s[i];
  if (char >= "a" && char <= "z") {
    upper += String.fromCharCode(char.charCodeAt(0) - 32);
  }
}
console.log(upper);

//without using built in functions
let str = "hello";
let result = "";

for (let i = 0; i < str.length; i++) {
  let ascii = str[i];

  if (ascii >= "a" && ascii <= "z") {
    result += ascii - 32;
  } else {
    result += ascii;
  }
}

console.log(result);