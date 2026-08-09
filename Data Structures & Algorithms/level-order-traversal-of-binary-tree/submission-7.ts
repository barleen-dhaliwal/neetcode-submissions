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
            let levelEnd = queue.length - 1;
            const level = [];
            let curr = i;
            while (curr <= levelEnd) {
                level.push(queue[curr].val);
                if (queue[curr].left) queue.push(queue[curr].left);
                if (queue[curr].right) queue.push(queue[curr].right);
                curr++;
            }
            ans.push(level);
            i = curr;
        }

        return ans;
    }
}
