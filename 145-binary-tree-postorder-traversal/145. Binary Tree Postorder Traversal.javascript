/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {

  let out = []
  function dfs(curr) {
    if(curr === null) {
      return
    }
    dfs(curr.left)
    dfs(curr.right)
    out.push(curr.val)
  }
  dfs(root)
  return out

};