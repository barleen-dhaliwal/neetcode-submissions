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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const ans = [];
        this.helper(root, ans);
        return ans;
    }

    helper(root: TreeNode | null, ans: number[]) {
        if (!root) return;
        this.helper(root.left, ans);
        ans.push(root.val);
        this.helper(root.right, ans);
    }
}
