class tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let root = new tree(10);
root.left = new tree(5);
root.right = new tree(15);
root.left.left = new tree(2);
root.left.right = new tree(3);
root.right.right = new tree(12);
root.right.left = new tree(13);

let result = [];
function dfs(root, level) {
  if (root == null) {
    return;
  }
  if (result.length === level) {
    result.push([]);
  }
  result[level].push(root.val);
  dfs(root.left, level + 1);
  dfs(root.right, level + 1);
}
dfs(root, 0);
console.log(result);
