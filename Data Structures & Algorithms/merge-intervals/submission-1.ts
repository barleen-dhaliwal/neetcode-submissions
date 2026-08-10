class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);

        const ans = [intervals[0]];
        for (let j = 1; j < intervals.length; j++) {
            const curr = intervals[j];
            const prev = ans[ans.length - 1];
            if (curr[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], curr[1]);
            } else {
                ans.push(curr);
            }
        }

        return ans;
    }
}
