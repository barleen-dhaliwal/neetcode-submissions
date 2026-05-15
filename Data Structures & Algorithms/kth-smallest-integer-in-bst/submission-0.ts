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
    inOrder=[]
    kthSmallest(root: TreeNode | null, k: number): number {
        this.kthSmallestHelper(root)
        return this.inOrder[k-1];
       

    }
    kthSmallestHelper(root: TreeNode | null) {
        if(!root)
            return
        this.kthSmallestHelper(root.left)
        this.inOrder.push(root.val)
        this.kthSmallestHelper(root.right)
    }


}
