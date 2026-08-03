let arr = [1, 2, 3, 4, 5];
let result = [];

function backtracking(start, path) {
  if (start == arr.length) {
    result.push([...path]);
    return;
  }

  path.push(arr[start]);
  backtracking(start + 1, path);
  path.pop();
  backtracking(start + 1, path);
}

backtracking(0, []);
console.log(result);
