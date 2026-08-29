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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const ans = [];
        this.dfsHelper(root, ans);
        return ans[k - 1];
    }

    dfsHelper(root: TreeNode | null, ans: number[]) {
        if (!root) return;

        this.dfsHelper(root.left, ans);
        ans.push(root.val);
        this.dfsHelper(root.right, ans);
    }
}
