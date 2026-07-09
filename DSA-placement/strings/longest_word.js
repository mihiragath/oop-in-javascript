//Longest Word in a String

let str = "The quick brown fox jumps over the lazy dog";
let words = str.split(" ");
let longestWord = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}
console.log(longestWord);

//without using split method
let longestWord1 = "";
let word1 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (word1.length > longestWord1.length) {
      longestWord1 = word1;
    }
    word1 = "";
  } else {
    word1 += str[i];
  }
}
if (word1.length > longestWord1.length) {
  longestWord1 = word1;
}
console.log(longestWord1);
