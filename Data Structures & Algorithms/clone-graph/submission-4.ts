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
            return node;
        const visited = new Map<Node, Node>();
        return this.dfsCloning(node, visited)
    }

    dfsCloning(node: Node, visited: Map<Node, Node>) {
        if (visited.has(node)) return visited.get(node);

        const newNode = new Node(node.val);
        visited.set(node,newNode)

        for (const n of node.neighbors) {
            newNode.neighbors.push(this.dfsCloning(n,visited));
        }
        return newNode;
    }
}
