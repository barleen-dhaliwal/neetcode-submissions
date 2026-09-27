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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0;
        const heightDfs = (root: TreeNode | null) => {
            if (!root || (!root.left && !root.right)) return 0;

            let leftHeight = 0;
            let rightHeight = 0;
            if (root.left) leftHeight += 1 + heightDfs(root.left);
            if (root.right) rightHeight += 1 + heightDfs(root.right);
            const d = leftHeight + rightHeight;
            if (d > res) res = d;
            return Math.max(leftHeight, rightHeight);
        };

        heightDfs(root);

        return res;
    }
}
