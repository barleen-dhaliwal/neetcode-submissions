class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const lastInterval = result[result.length - 1];
            const lastIntervalEnd = lastInterval[1];

            if (intervals[i][0] <= lastIntervalEnd) {
                lastInterval[1] = Math.max(lastInterval[1], intervals[i][1]);
            } else {
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
