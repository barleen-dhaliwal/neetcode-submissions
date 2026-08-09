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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const ans = [];
        if (!root) {
            return ans;
        }

        let i = 0;
        const queue = [root];

        while (i < queue.length) {
            let levelSize = queue.length - i;
            const level = [];
            // process elements on current level
            for (let curr = 0; curr < levelSize; curr++) {
                const node=queue[i]
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                i++;
            }

            ans.push(level);
        }

        return ans;
    }
}
