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
        // const ans = [];
        // if (!root) return ans;

        // const q = [root];

        // while (q.length) {
        //     ans.push(q.map((e) => e.val));
        //     const next = [];
        //     while (q.length) {
        //         const element = q.shift();
        //         if (element.left) next.push(element.left);
        //         if (element.right) next.push(element.right);
        //     }
        //     q.push(...next);
        // }

        // return ans;

        const ans = [];
        if (!root) return ans;

        const q = [root];
        let curr = 0;

        while (curr < q.length) {
            const end = q.length;
            const level: number[] = [];
            while (curr < end) {
                const node = q[curr++];
                level.push(node.val);

                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }

            ans.push(level);
        }

        return ans;
    }
}
