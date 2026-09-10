class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let ans = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    ans = Math.max(ans, this.getArea(grid, i, j));
                }
            }
        }
        return ans;
    }

    getArea(grid: number[][], row: number, col: number) {
        if (
            row < 0 ||
            col < 0 ||
            row === grid.length ||
            col === grid[0].length ||
            grid[row][col] === 0
        )
            return 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        grid[row][col] = 0;

        let area = 1;
        for (const [dr, dc] of directions) {
            area += this.getArea(grid, row + dr, col + dc);
        }
        return area;
    }
}
