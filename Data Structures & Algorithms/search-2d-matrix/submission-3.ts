class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let l = 0;
        let r = rows * cols - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            let midR = Math.floor(mid / cols);
            let midC = mid % cols;
            if (target === matrix[midR][midC]) return true;
            else if (target > matrix[midR][midC]) l = mid + 1;
            else r = mid - 1;
        }

        return false;
    }
}
