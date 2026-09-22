class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;

        const adjList = new Map<number, number[]>();
        for (const edge of edges) {
            const curr = adjList.get(edge[0]) || [];
            curr.push(edge[1]);
            adjList.set(edge[0], curr);

            const curr2 = adjList.get(edge[1]) || [];
            curr2.push(edge[0]);
            adjList.set(edge[1], curr2);
        }
        const visited= new Set()
        return this.dfs(0, adjList, null, visited) && visited.size===n
    }

    dfs(node: number, adjList: Map<number, number[]>, prev , visited ) {
        if (visited.has(node)) return false;

        visited.add(node);

        const neighbours = adjList.get(node) || [];
        for (const n of neighbours) {
            if (n !== prev && !this.dfs(n, adjList, node, visited)) {
                return false;
            }
        }
        return true;
    }
}
