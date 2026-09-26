class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let start = 0;
        let end = rows - 1;
        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (matrix[mid][0] <= target && matrix[mid][cols - 1] >= target) {
                start = mid;
                break;
            } else if (matrix[mid][0] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        let colStart = 0;
        let colEnd = cols - 1;
        while (colStart <= colEnd) {
            let mid = Math.floor((colStart + colEnd) / 2);
            if (matrix[start][mid] === target) {
                return true;
            } else if (matrix[start][mid] < target) {
                colStart = mid + 1;
            } else {
                colEnd = mid - 1;
            }
        }

        return false;
    }
}
