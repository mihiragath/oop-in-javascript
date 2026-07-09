let str = "The quick brown fox jumps over the lazy dog";
let words = str.split(" ");
let shortestWord = words[0];
for (let i = 1; i < words.length; i++) {
  if (words[i].length < shortestWord.length) {
    shortestWord = words[i];
  }
}
console.log(shortestWord);

//without using split method
let shortestWord1 = str[0];
let word1 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (word1.length < shortestWord1.length) {
      shortestWord1 = word1;
    }
    word1 = "";
  } else {
    word1 += str[i];
  }
}
if (word1.length < shortestWord1.length) {
  shortestWord1 = word1;
}
console.log(shortestWord1);
