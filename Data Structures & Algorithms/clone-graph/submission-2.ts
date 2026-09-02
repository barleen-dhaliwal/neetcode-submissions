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

        // old to new map
        const map = new Map<Node,Node>();

        const dfs = (node: Node) => {
            if (map.has(node)) return map.get(node);

            const newNode = new Node(node.val);
            map.set(node, newNode);

            for (const n of node.neighbors) {
                newNode.neighbors.push(dfs(n));
            }

            return newNode;
        };

        return dfs(node);
    }
}
