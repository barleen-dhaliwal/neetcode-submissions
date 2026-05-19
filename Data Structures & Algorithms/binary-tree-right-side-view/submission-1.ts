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

        if(!root)
            return [];

        let q=[];
        q.push(root);
        let i=0;
        let ans=[];
        while(i<q.length){
            ans.push(q[i].val);
            let c=i;
            let len=q.length
            while(c<len){
            let node=q[c]
            if(node.right)
                q.push(node.right);
            if(node.left)
                q.push(node.left);
            c++;
            }
            i=c;
        }
    return ans;


    }
}
