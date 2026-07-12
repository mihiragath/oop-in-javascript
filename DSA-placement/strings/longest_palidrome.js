let str = 'abcabbadef';
function longestPalindrome(str) {
  let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(longestPalindrome(str));

//another approach
function longestPalindrome1(str) {
  let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length; j > i; j--) {
            if(str[i] === str[j-1]){
                let substring = str.slice(i, j);
                if (isPalindrome(substring) && substring.length > longest.length) {
                    longest = substring;
                }
            }
        }
    }
    return longest;
}
console.log(longestPalindrome1(str));   