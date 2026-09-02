class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adjList = new Map<number, number[]>();

        for (let i = 0; i < prerequisites.length; i++) {
            const n = adjList.get(prerequisites[i][0]) || [];
            n.push(prerequisites[i][1]);
            adjList.set(prerequisites[i][0], n);
        }

        const visited = new Set();
        const visiting = new Set();

        const ans = [];

        const dfs = (node: number) => {
            if (visited.has(node)) return true;

            if (visiting.has(node)) return false;

            const neighbours = adjList.get(node) || [];

            visiting.add(node);
            for (let i = 0; i < neighbours.length; i++) {
                if (!dfs(neighbours[i])) return false;
            }

            visiting.delete(node);
            visited.add(node);
            ans.push(node);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return ans;
    }
}
