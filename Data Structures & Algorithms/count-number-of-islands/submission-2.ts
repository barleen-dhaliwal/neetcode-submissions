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
                    this.markIslandVisitedBFS(grid, i, j);
                }
            }
        }

        return ans;
    }

    markIslandVisitedDFS(grid: string[][], i: number, j: number) {
        if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] === "0")
            return;
        grid[i][j] = "0";
        this.markIslandVisitedDFS(grid, i - 1, j);
        this.markIslandVisitedDFS(grid, i + 1, j);
        this.markIslandVisitedDFS(grid, i, j - 1);
        this.markIslandVisitedDFS(grid, i, j + 1);
    }

    markIslandVisitedBFS(grid: string[][], i: number, j: number) {
        const q = [[i, j]];
        let curr = 0;

        while (curr<q.length) {
            let size = q.length - curr;
            for (let x = 0; x < size; x++) {
                const node = q[curr++];
                const row = node[0];
                const col = node[1];
                if (
                    row < 0 ||
                    col < 0 ||
                    row === grid.length ||
                    col === grid[0].length ||
                    grid[row][col] === "0"
                ) {
                    continue;
                }
                grid[row][col] = "0";
                q.push([row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]);
            }
        }
    }
}
