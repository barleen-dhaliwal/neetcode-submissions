class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const rows = heights.length;
        const cols = heights[0].length;
        const ans = [];

        const vistedPacific = new Set<string>();
        const vistedAtlantic = new Set<string>();

        for (let i = 0; i < rows; i++) {
            this.markReachable(heights, i, 0, vistedPacific);
            this.markReachable(heights, i, cols - 1, vistedAtlantic);
        }

        for (let i = 0; i < cols; i++) {
            this.markReachable(heights, 0, i, vistedPacific);
            this.markReachable(heights, rows - 1, i, vistedAtlantic);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const key = this.getKey(i, j);
                if (vistedPacific.has(key) && vistedAtlantic.has(key)) {
                    ans.push([i, j]);
                }
            }
        }
        return ans;
    }

    markReachable(grid: number[][], r: number, c: number, visited: Set<string>) {
        const key = this.getKey(r, c);

        if (visited.has(key)) return;

        visited.add(key);

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        for (const [dr, dc] of directions) {
            const newR = r + dr;
            const newC = c + dc;

            if (
                newR >= 0 &&
                newC >= 0 &&
                newR < grid.length &&
                newC < grid[0].length &&
                grid[newR][newC] >= grid[r][c]
            ) {
                this.markReachable(grid, newR, newC, visited);
            }
        }
    }

    getKey(row: number, col: number) {
        return `R${row}C${col}`;
    }
}
