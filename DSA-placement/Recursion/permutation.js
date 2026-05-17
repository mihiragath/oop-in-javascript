function permutation(str, answer = "") {
  if (str.length === 0) {
    console.log(answer);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    let left = str.slice(0, i);
    let right = str.slice(i + 1);

    let remaining = left + right;

    permutation(remaining, answer + ch);
  }
}

permutation("abc");
