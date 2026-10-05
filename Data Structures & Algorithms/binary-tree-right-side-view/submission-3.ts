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
    rightSideView(root: TreeNode | null): number[] {
        const ans = [];

        if (!root) return ans;

        let index = 0;
        const q = [root];
        while (index < q.length) {
            const levelEnd = q.length;
            ans.push(q[index].val);
            while (index < levelEnd) {
                if (q[index].right) q.push(q[index].right);
                if (q[index].left) q.push(q[index].left);
                index++;
            }
        }

        return ans;
    }
}
