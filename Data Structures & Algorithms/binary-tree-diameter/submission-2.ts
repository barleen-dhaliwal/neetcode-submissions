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
        let diameter = 0;

        const height = (node: TreeNode | null): number => {
            if (!node) return 0;

            const leftHeight = node.left ? 1 + height(node.left) : 0;
            const rightHeight = node.right ? 1 + height(node.right) : 0;

            diameter = Math.max(diameter, leftHeight + rightHeight);

            return Math.max(leftHeight, rightHeight);
        };

        height(root);
        return diameter;
    }
}
