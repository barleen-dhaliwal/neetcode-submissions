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
    goodNodes(root: TreeNode | null): number {

        let ans=0;
        if(!root)
            return ans;
        
        const helper=(root: TreeNode| null, max:number)=>{
            if(!root)
                return;
            if(root.val>=max){
                ans++;
                max=root.val;
            }
            helper(root.left,max)
            helper(root.right,max)
        }

        helper(root, root.val)
        return ans;
    }
}
