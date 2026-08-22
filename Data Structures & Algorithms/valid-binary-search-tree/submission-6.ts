/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null, lower = -Infinity, upper = Infinity): boolean {
        if (!root) return true;

        if (root.val <= lower || root.val >= upper) return false;

        return this.isValidBST(root.left,lower,root.val) && this.isValidBST(root.right,root.val, upper)
    }
}
