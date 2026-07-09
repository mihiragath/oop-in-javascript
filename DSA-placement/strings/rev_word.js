//Reverse Words in a Sentence
let str = "Welcome to the world of JavaScript";
let words = str.split(" ");
let reversedWords = words.reverse();
let reversedStr = reversedWords.join(" ");
console.log(reversedStr);

//without using split, reverse and join methods
let str = "Welcome to the world of JavaScript";
let reversedStr = "";
let word = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    reversedStr = word + " " + reversedStr;
    word = "";
  } else {
    word += str[i];
  }
}
reversedStr = word + " " + reversedStr;
console.log(reversedStr.trim());
