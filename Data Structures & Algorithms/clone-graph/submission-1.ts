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
        if (!node) return null;

        const visited = new Map();

        const dfs = (node: Node) => {
            if (visited.has(node.val)) return visited.get(node.val);

            const newNode = new Node(node.val);
            visited.set(node.val, newNode);

            for (const n of node.neighbors) {
                newNode.neighbors.push(dfs(n));
            }

            return newNode;
        };

        return dfs(node);
    }
}
