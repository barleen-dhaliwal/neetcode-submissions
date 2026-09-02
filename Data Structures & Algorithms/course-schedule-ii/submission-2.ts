class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adjList = new Map<number, number[]>();

        for (let i = 0; i < prerequisites.length; i++) {
            if (!adjList.has(prerequisites[i][0])) adjList.set(prerequisites[i][0], []);
            adjList.get(prerequisites[i][0]).push(prerequisites[i][1]);
        }

        const visited = new Set();
        const visiting = new Set();

        const ans = [];

        const dfs = (node: number) => {
            if (visited.has(node)) return true;

            if (visiting.has(node)) return false;

            visiting.add(node);

            const neighbours = adjList.get(node) || [];
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
