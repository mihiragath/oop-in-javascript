function subsets(arr, index = 0, current = []) {
  if (index === arr.length) {
    console.log(current);
    return;
  }

  // include
  current.push(arr[index]);
  subsets(arr, index + 1, current);

  // exclude
  current.pop();
  subsets(arr, index + 1, current);
}

subsets([1, 2, 3]);
