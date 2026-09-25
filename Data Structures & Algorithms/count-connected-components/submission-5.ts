class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adjList = new Map<number, number[]>();
        for (const [a, b] of edges) {
            const neighboursOfA = adjList.get(a) || [];
            neighboursOfA.push(b);
            adjList.set(a, neighboursOfA);

            const neighboursOfB = adjList.get(b) || [];
            neighboursOfB.push(a);
            adjList.set(b, neighboursOfB);
        }

        const visited = new Set<number>();
        let ans = 0;

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                ans++;
                this.dfs(i, adjList, visited, -1);
            }
        }
        return ans;
    }

    dfs(node: number, adjList: Map<number, number[]>, visited: Set<number>, prev: number) {
        if (visited.has(node)) return;

        visited.add(node);

        const neighbours = adjList.get(node) || [];

        for (const neighbour of neighbours) {
            if (neighbour !== prev) {
                this.dfs(neighbour, adjList, visited, node);
            }
        }
    }
}
