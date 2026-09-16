class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList = new Map<number, number[]>();
        for (let i = 0; i < prerequisites.length; i++) {
            if (adjList.has(prerequisites[i][1])) {
                adjList.get(prerequisites[i][1]).push(prerequisites[i][0]);
            } else {
                adjList.set(prerequisites[i][1], [prerequisites[i][0]]);
            }
        }

        let visiting = new Set();
        let visited = new Set();

        const dfs = (node: number) => {
            if (visited.has(node)) return true;
            if (visiting.has(node)) return false;

            visiting.add(node);
            const neighbours = adjList.get(node);
            if (neighbours) {
                for (const n of neighbours) {
                    if (!dfs(n)) {
                        return false;
                    }
                }
            }

            visiting.delete(node);
            visited.add(node);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
