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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
 
        return this.isValidBSTHelper(root, -Infinity, +Infinity)
    }
    isValidBSTHelper(root: TreeNode | null, lowerBound:number, upperBound:number): boolean {
        if(!root)
            return true;
        if(root.val<=lowerBound|| root.val>=upperBound)
            return false;
        if(root.left && root.left.val>=root.val )
            return false;
        if(root.right && root.right.val<=root.val)
            return false;
        return this.isValidBSTHelper(root.left, lowerBound, root.val ) &&  this.isValidBSTHelper(root.right, root.val, upperBound)
        
    }
}
