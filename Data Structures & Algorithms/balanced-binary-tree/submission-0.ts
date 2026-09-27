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
    isBalanced(root: TreeNode | null): boolean {
        let balanced = true;
        const heightDFS = (root: TreeNode | null) => {
            if (!root) return 0;

            const leftH = 1 + heightDFS(root.left);
            const rightH = 1 + heightDFS(root.right);

            if (Math.abs(leftH - rightH) > 1) balanced = false;

            return Math.max(leftH, rightH);
        };

        heightDFS(root);
        return balanced;
    }
}
