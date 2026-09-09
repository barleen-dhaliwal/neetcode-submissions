class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ans = [];

        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (this.reachPacific(heights, i, j) && this.reachAtlantic(heights, i, j)) {
                    ans.push([i, j]);
                }
            }
        }

        return ans;
    }

    reachPacific(
        grid: number[][],
        row: number,
        col: number,
        visited: Set<string> = new Set(),
    ): boolean {
        if (row === 0 || col === 0) return true;

        visited.add(this.getKey(row, col));

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (const [dr, dc] of directions) {
            const newR = row + dr;
            const newC = col + dc;
            if (
                newR < grid.length &&
                newC < grid[0].length &&
                grid[newR][newC] <= grid[row][col] &&
                !visited.has(this.getKey(newR, newC)) &&
                this.reachPacific(grid, newR, newC, visited)
            ) {
                return true;
            }
        }
        return false;
    }

    reachAtlantic(
        grid: number[][],
        row: number,
        col: number,
        visited: Set<string> = new Set(),
    ): boolean {
        if (row === grid.length - 1 || col === grid[0].length - 1) return true;

        visited.add(this.getKey(row, col));

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (const [dr, dc] of directions) {
            const newR = row + dr;
            const newC = col + dc;
            if (
                newR >= 0 &&
                newC >= 0 &&
                grid[newR][newC] <= grid[row][col] &&
                !visited.has(this.getKey(newR, newC)) &&
                this.reachAtlantic(grid, newR, newC, visited)
            ) {
                return true;
            }
        }
        return false;
    }

    getKey(row: number, col: number) {
        return `Row${row}Col${col}`;
    }
}
