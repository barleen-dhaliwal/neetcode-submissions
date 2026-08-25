class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => a[0] - b[0]);
        let ans = 0;

        let prev = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            //overlapping case
            if (intervals[i][0] < prev[1]) {
                ans++;
                prev[1] = Math.min(prev[1], intervals[i][1]);
            } else {
                prev = intervals[i];
            }
        }

        return ans;
    }
}
