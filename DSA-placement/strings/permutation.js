//Permutation in String

let str1 = "abc";
let str2 = "cba";

function isPermutation(str1, str2) {
  // If lengths are different, they can't be permutations
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort characters in both strings and compare
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isPermutation(str1, str2)); // true
