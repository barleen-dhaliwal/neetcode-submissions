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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        if(!root&&!subRoot)
            return true;
        if(!root||!subRoot)
            return false;
        return this.isIdentical(root,subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

    }

    isIdentical(a:TreeNode| null,b:TreeNode| null){

        if(!a&&!b)
            return true;
        if(!a||!b)
            return false;
        if(a.val!==b.val)
            return false;
        return this.isIdentical(a.left,b.left) && this.isIdentical(a.right,b.right)
        
    }
}
