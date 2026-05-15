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
     * @param {number} k
     * @return {number}
     */
    count=0;
    kthSmallest(root: TreeNode | null, k: number): number {
        return this.kthSmallestHelper(root,k)
    }
    kthSmallestHelper(root: TreeNode | null,k:number) {
        if(!root)
            return -1;
        const left=this.kthSmallestHelper(root.left,k)
        if(left!==-1)
            return left;
        this.count++;
        if(this.count===k)
            return root.val
        return this.kthSmallestHelper(root.right,k)
    }


}
