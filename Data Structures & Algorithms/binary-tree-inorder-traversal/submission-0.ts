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
    inorderTraversal(root: TreeNode | null): number[] {

       return this.helper(root,[])
    }

    helper(root: TreeNode | null, ans: number[]):number[]{

        if(!root)
            return ans;
        
        this.helper(root.left,ans)
        ans.push(root.val)
        this.helper(root.right,ans)

        return ans


    }
}
