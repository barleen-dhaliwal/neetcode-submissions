class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let ans = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    ans++;
                    this.markIslandVisitedDFS(grid, i, j);
                }
            }
        }

        return ans;
    }

    markIslandVisitedDFS(grid: string[][], i: number, j: number) {
        if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] === "0") return;
        grid[i][j] = "0";
        this.markIslandVisitedDFS(grid, i - 1, j);
        this.markIslandVisitedDFS(grid, i + 1, j);
        this.markIslandVisitedDFS(grid, i, j - 1);
        this.markIslandVisitedDFS(grid, i, j + 1);
    }
}
