//without using built in functions
let s = "hello";

let reversed = "";
for (let i = s.length - 1; i >= 0; i--) {
  reversed += s[i];
}
console.log(reversed);

//using function
s = s.split("").reverse().join("");
console.log(s);
