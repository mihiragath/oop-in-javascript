let str = 'listen';
let anagrams = ['enlist', 'google', 'inlets', 'banana'];

function findAnagrams(str, anagrams) {
  let sortedStr = str.split('').sort().join('');
  let result = [];
  for (let anagram of anagrams) {
    if (anagram.split('').sort().join('') === sortedStr) {
      result.push(anagram);
    }
  }
  return result;
}

findAnagrams(str, anagrams);
console.log(findAnagrams(str, anagrams)); // Output: ['enlist', 'inlets']
