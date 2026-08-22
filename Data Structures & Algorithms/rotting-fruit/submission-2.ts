class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let ans = -1;
        let fresh = 0;
        const q: [number, number][] = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    q.push([i, j]);
                    grid[i][j] = 0;
                } else if (grid[i][j] === 1) fresh++;
            }
        }
        if (!fresh) {
            return 0;
        }

        let curr = 0;
        while (curr < q.length) {
            const levelSize = q.length - curr;
            ans++;
            for (let i = 0; i < levelSize; i++) {
                const node = q[curr++];
                const row = node[0];
                const col = node[1];

                if (row + 1 < grid.length && grid[row + 1][col] === 1) {
                    fresh--;
                    grid[row + 1][col] = 0;
                    q.push([row + 1, col]);
                }
                if (row - 1 >= 0 && grid[row - 1][col] === 1) {
                    fresh--;
                    grid[row - 1][col] = 0;
                    q.push([row - 1, col]);
                }
                if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
                    fresh--;
                    grid[row][col + 1] = 0;
                    q.push([row, col + 1]);
                }
                if (col - 1 >= 0 && grid[row][col - 1] === 1) {
                    fresh--;
                    grid[row][col - 1] = 0;
                    q.push([row, col - 1]);
                }
            }
        }

        console.log(fresh);

        return fresh > 0 ? -1 : ans;
    }
}
