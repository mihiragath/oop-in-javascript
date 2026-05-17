//using loop
let s = "abcba";
let isPalindrome = true;

for (let i = 0; i < s.length / 2; i++) {
  if (s[i] !== s[s.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);

//reverse method
let reversed = s.split("").reverse().join("");
if (s === reversed) {
  console.log(true);
} else {
  console.log(false);
}
