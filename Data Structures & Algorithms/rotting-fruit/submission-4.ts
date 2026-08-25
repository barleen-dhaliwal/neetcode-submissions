class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let ans = 0;
        let fresh = 0;
        const q: [number, number][] = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    q.push([i, j]);
                } else if (grid[i][j] === 1) fresh++;
            }
        }
        if (!fresh) {
            return 0;
        }

        let curr = 0;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        while (fresh > 0 && curr < q.length) {
            const levelSize = q.length - curr;
            for (let i = 0; i < levelSize; i++) {
                const node = q[curr++];
                const currRow = node[0];
                const currCol = node[1];

                for (const [dr, dc] of directions) {
                    const row = currRow + dr;
                    const col = currCol + dc;
                    if (
                        row >= 0 &&
                        row < grid.length &&
                        col >= 0 &&
                        col < grid[0].length &&
                        grid[row][col] === 1
                    ) {
                        grid[row][col] = 2;
                        fresh--;
                        q.push([row, col]);
                    }
                }
            }
            ans++;
        }

        return fresh > 0 ? -1 : ans;
    }
}
