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

        const ans=[];
        if(!root)
            return ans;
        let queue=[root]
        while(queue.length){
            const temp=[]
            const levelNodes=[]
            queue.forEach(node=>{
                if(node.left){
                temp.push(node.left)
                }   
                if(node.right){
                    temp.push(node.right)
                }
                levelNodes.push(node.val)
            })
            queue=temp;
            ans.push(levelNodes)
          

        }


        return ans;
    }
}
