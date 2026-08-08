let str = "1+3+2";
let no = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] != "+") {
    no += str[i];
  }
}
no = no.split("").sort().join("+");

console.log(no);

let str = "hello, world!";
let vowels = ["a", "e", "i", "o", "u"];
let result = "";

for (let i = 0; i < str.length; i++) {
  if (!vowels.includes(str[i].toLowerCase())) {
    result += " .";
    result += str[i];
  }
}
console.log(result);
