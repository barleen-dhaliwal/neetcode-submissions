class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const newIntervals: number[][] = [];
        let inserted = false;

        for (let interval of intervals) {
            if (!inserted && newInterval[0] < interval[0]) {
                newIntervals.push(newInterval);
                inserted = true;
            }
            newIntervals.push(interval);
        }
        if (!inserted) newIntervals.push(newInterval);

        //merge
        const ans = [newIntervals[0]];

        for (let i = 1; i < newIntervals.length; i++) {
            const prev = ans[ans.length - 1];
            const curr = newIntervals[i];

            if (curr[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], curr[1]);
            } else {
                ans.push(curr);
            }
        }

        return ans;
    }
}
