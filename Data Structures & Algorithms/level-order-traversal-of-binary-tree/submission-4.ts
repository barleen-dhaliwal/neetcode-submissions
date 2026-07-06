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


        const ans=[];
        if(!root)
            return ans;

        const q=[root];
        let curr=0;

        while(curr<q.length){
            ans.push(q.slice(curr).map(n=>n.val));
            const next=[]
            while(curr<q.length){
                const element=q[curr];
                if(element.left)
                    next.push(element.left)
                if(element.right)
                    next.push(element.right)
                curr++;
            }
            q.push(...next)

        }

        return ans;

    }
}
