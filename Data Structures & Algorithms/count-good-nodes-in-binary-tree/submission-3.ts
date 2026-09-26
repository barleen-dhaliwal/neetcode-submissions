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
     * @return {number}
     */
    goodNodes(root: TreeNode | null, maxValue = -Infinity): number {
        if (!root) return 0;
        let ans = 0;
        if (root.val >= maxValue) {
            ans++;
            maxValue = root.val;
        }
        ans += this.goodNodes(root.left, maxValue) + this.goodNodes(root.right, maxValue);
        return ans;
    }
}
