class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList = new Map();

        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, []);
        }

        for (let [course, pre] of prerequisites) {
            adjList.get(course).push(pre);
        }

        const visited = new Set();

        const dfs = (course: number) => {
            if (visited.has(course)) return false;
            if (!adjList.get(course).length) return true;
            visited.add(course);
            for (const n of adjList.get(course)) {
                if (!dfs(n)) return false;
            }
            visited.delete(course);
            adjList.set(course, []);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
