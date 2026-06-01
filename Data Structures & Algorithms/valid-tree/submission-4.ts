class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;
        const adjList = new Map();

        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }
        for (const [node, neighbour] of edges) {
            adjList.get(node).push(neighbour);
            adjList.get(neighbour).push(node);
        }

        const visited = new Set();

        const dfs = (node: number, prev: number) => {
            if (visited.has(node)) {
                return false;
            }
            visited.add(node);
            for (const neighbour of adjList.get(node)) {
                if (neighbour !== prev && !dfs(neighbour, node)) return false;
            }
            return true;
        };
        if (!dfs(0, -1)) return false;
        return visited.size === n;
    }
}
