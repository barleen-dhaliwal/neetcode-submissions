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
            let size = q.length - index;
            for (let i = index; i < index + size; i++) {
                if (i === index) ans.push(q[i].val);
                if (q[i].right) q.push(q[i].right);
                if (q[i].left) q.push(q[i].left);
            }
            index += size;
        }

        return ans;
    }
}
