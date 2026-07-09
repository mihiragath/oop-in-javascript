//Toggle Case
let str = "Hello World";
let toggledStr = "";
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char === char.toUpperCase()) {
    toggledStr += char.toLowerCase();
  } else {
    toggledStr += char.toUpperCase();
  }
}
console.log(toggledStr);
