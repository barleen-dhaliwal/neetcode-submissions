class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = 0;

        let prevEnd = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            //overlapping case
            if (intervals[i][0] < prevEnd) {
                ans++;
                prevEnd = Math.min(prevEnd, intervals[i][1]);
            } else {
                prevEnd = intervals[i][1];
            }
        }

        return ans;
    }
}
