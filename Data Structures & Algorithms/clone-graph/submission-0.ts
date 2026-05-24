/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {

        if(!node)
            return null;
        
        const map=new Map<Node,Node>();

        const clone=(node:Node)=>{
            const n=map.get(node);
            if(n){
                return n;
            }else{
                let newNode=new Node(node.val);
                map.set(node,newNode)
                node.neighbors.forEach(n=>{
                    const clonedNeighborNode=clone(n);
                    newNode.neighbors.push(clonedNeighborNode)
                })
                return newNode;

            }
        }

        return clone(node);
    }
}
