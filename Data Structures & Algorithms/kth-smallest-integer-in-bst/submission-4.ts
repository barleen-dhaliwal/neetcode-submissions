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
        const inOrder = [];
        this.getInorder(root, inOrder);
        return inOrder[k - 1];
    }

    getInorder(root: TreeNode | null, ans: number[]) {
        if (!root) return;
        this.getInorder(root.left, ans);
        ans.push(root.val);
        this.getInorder(root.right, ans);
    }
}
