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
        const state = {
            k,
            ans: -1,
        };

        this.dfsHelper(root, state);
        return state.ans;
    }

    dfsHelper(root: TreeNode | null, state: { k: number; ans: number }) {
        if (!root || state.k === 0) return;

        this.dfsHelper(root.left, state);

        state.k--;

        if (state.k === 0) {
            state.ans = root.val;
            return;
        }

        this.dfsHelper(root.right, state);
    }
}
