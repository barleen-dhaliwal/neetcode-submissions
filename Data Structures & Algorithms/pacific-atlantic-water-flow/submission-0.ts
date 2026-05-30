class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ans = [];
        const rows = heights.length;
        const cols = heights[0].length;

        const checkFlowPossibleA = (
            i: number,
            j: number,
            previousHeight: number,
            visited: Set<string>,
        ): boolean => {
            if (i === rows || j === cols) return true;

            if (i < 0 || j < 0 || heights[i][j] > previousHeight) return false;

            const key = `${i},${j}`;

            if (visited.has(key)) {
                return false;
            }

            visited.add(key);

            if (
                checkFlowPossibleA(i + 1, j, heights[i][j], visited) ||
                checkFlowPossibleA(i - 1, j, heights[i][j], visited) ||
                checkFlowPossibleA(i, j + 1, heights[i][j], visited) ||
                checkFlowPossibleA(i, j - 1, heights[i][j], visited)
            )
                return true;
            else return false;
        };

        const checkFlowPossibleP = (
            i: number,
            j: number,
            previousHeight: number,
            visited: Set<string>,
        ): boolean => {
            if (i === rows || j === cols || i < 0 || j < 0 || heights[i][j] > previousHeight)
                return false;

            const key = `${i},${j}`;

            if (visited.has(key)) {
                return false;
            }

            visited.add(key);

            if (i === 0 || j === 0) return true;

            if (
                checkFlowPossibleP(i + 1, j, heights[i][j], visited) ||
                checkFlowPossibleP(i - 1, j, heights[i][j], visited) ||
                checkFlowPossibleP(i, j + 1, heights[i][j], visited) ||
                checkFlowPossibleP(i, j - 1, heights[i][j], visited)
            )
                return true;
            else return false;
        };

        const checkFlowPossible = (i: number, j: number): boolean => {
            return (
                checkFlowPossibleA(i, j, heights[i][j], new Set()) &&
                checkFlowPossibleP(i, j, heights[i][j], new Set())
            );
        };

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (checkFlowPossible(i, j)) ans.push([i, j]);
            }
        }

        return ans;
    }
}
