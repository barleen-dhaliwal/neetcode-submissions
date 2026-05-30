class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        // greater time complexity approach
        // const ans = [];
        // const rows = heights.length;
        // const cols = heights[0].length;

        // const checkFlowPossibleA = (
        //     i: number,
        //     j: number,
        //     previousHeight: number,
        //     visited: Set<string>,
        // ): boolean => {
        //     if (i === rows || j === cols) return true;

        //     if (i < 0 || j < 0 || heights[i][j] > previousHeight) return false;

        //     const key = `${i},${j}`;

        //     if (visited.has(key)) {
        //         return false;
        //     }

        //     visited.add(key);

        //     if (
        //         checkFlowPossibleA(i + 1, j, heights[i][j], visited) ||
        //         checkFlowPossibleA(i - 1, j, heights[i][j], visited) ||
        //         checkFlowPossibleA(i, j + 1, heights[i][j], visited) ||
        //         checkFlowPossibleA(i, j - 1, heights[i][j], visited)
        //     )
        //         return true;
        //     else return false;
        // };

        // const checkFlowPossibleP = (
        //     i: number,
        //     j: number,
        //     previousHeight: number,
        //     visited: Set<string>,
        // ): boolean => {
        //     if (i === rows || j === cols || i < 0 || j < 0 || heights[i][j] > previousHeight)
        //         return false;

        //     const key = `${i},${j}`;

        //     if (visited.has(key)) {
        //         return false;
        //     }

        //     visited.add(key);

        //     if (i === 0 || j === 0) return true;

        //     if (
        //         checkFlowPossibleP(i + 1, j, heights[i][j], visited) ||
        //         checkFlowPossibleP(i - 1, j, heights[i][j], visited) ||
        //         checkFlowPossibleP(i, j + 1, heights[i][j], visited) ||
        //         checkFlowPossibleP(i, j - 1, heights[i][j], visited)
        //     )
        //         return true;
        //     else return false;
        // };

        // const checkFlowPossible = (i: number, j: number): boolean => {
        //     return (
        //         checkFlowPossibleA(i, j, heights[i][j], new Set()) &&
        //         checkFlowPossibleP(i, j, heights[i][j], new Set())
        //     );
        // };

        // for (let i = 0; i < heights.length; i++) {
        //     for (let j = 0; j < heights[0].length; j++) {
        //         if (checkFlowPossible(i, j)) ans.push([i, j]);
        //     }
        // }

        // return ans;

        const rows = heights.length;
        const cols = heights[0].length;

        const pacificSet = new Set<string>();
        const atlanticSet = new Set<string>();

        const dfs = (i: number, j: number, visited: Set<string>, previousHeight: number) => {
            const key = `${i},${j}`;

            if (
                i < 0 ||
                j < 0 ||
                i === rows ||
                j === cols ||
                previousHeight > heights[i][j] ||
                visited.has(key)
            )
                return;

            visited.add(key);
            dfs(i - 1, j, visited, heights[i][j]);
            dfs(i + 1, j, visited, heights[i][j]);
            dfs(i, j - 1, visited, heights[i][j]);
            dfs(i, j + 1, visited, heights[i][j]);
        };

        for (let i = 0; i < rows; i++) {
            dfs(i, 0, pacificSet, heights[i][0]);
            dfs(i, cols - 1, atlanticSet, heights[i][cols - 1]);
        }

        for (let j = 0; j < cols; j++) {
            dfs(0, j, pacificSet, heights[0][j]);
            dfs(rows - 1, j, atlanticSet, heights[rows - 1][j]);
        }

        const ans = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const key = `${i},${j}`;
                if (atlanticSet.has(key) && pacificSet.has(key)) {
                    ans.push([i, j]);
                }
            }
        }

        return ans;
    }
}
