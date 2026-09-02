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

    getArea(grid: number[][], i: number, j: number, ans = [0]): number {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] === 0)
            return;

        ans[0]++;
        grid[i][j] = 0;
        this.getArea(grid, i + 1, j, ans);
        this.getArea(grid, i - 1, j, ans);
        this.getArea(grid, i, j + 1, ans);
        this.getArea(grid, i, j - 1, ans);
        return ans[0];
    }
}
