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
            const levelNodes=[]
             const levelSize = queue.length;
            for(let i=0;i<levelSize;i++){
                const node=queue.shift();
                if(node.left){
                queue.push(node.left)
                }   
                if(node.right){
                    queue.push(node.right)
                }
                levelNodes.push(node.val)
            }
           
            ans.push(levelNodes)
          

        }


        return ans;
    }
}
