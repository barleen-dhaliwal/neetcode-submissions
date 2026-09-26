class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let start = 0;
        let end = rows * cols - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const val = matrix[Math.floor(mid / cols)][mid % cols];
            if (val === target) {
                return true;
            } else if (val < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return false;
    }
}
