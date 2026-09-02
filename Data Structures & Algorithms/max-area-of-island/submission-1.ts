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

    getArea(grid: number[][], i: number, j: number): number {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] === 0)
            return 0;

        grid[i][j] = 0;
        return (
            1 +
            this.getArea(grid, i + 1, j) +
            this.getArea(grid, i - 1, j) +
            this.getArea(grid, i, j + 1) +
            this.getArea(grid, i, j - 1)
        );
    }
}
