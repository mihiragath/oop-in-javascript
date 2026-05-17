let s = "hello";
let vowelCOunt = 0;
let consonantCount = 0;
for (let i = 0; i < s.length; i++) {
  if (
    s[i] === "a" ||
    s[i] === "e" ||
    s[i] === "i" ||
    s[i] === "o" ||
    s[i] === "u"
  ) {
    vowelCOunt++;
  } else {
    consonantCount++;
  }
}
console.log("vowel count", vowelCOunt);
console.log("consonant count", consonantCount);

//another one
let str = "Hello World";

let vowels = 0;
let consonants = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  // check alphabet only
  if (ch >= "a" && ch <= "z") {
    if ("aeiou".includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
