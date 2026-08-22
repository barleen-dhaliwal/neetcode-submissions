class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const ans: number[][] = [];
        let inserted = false;

        for (let interval of intervals) {
            // We already inserted/merged newInterval,
            // so everything remaining can just be pushed.
            if (inserted) {
                ans.push(interval);
            }

            // interval is completely before newInterval
            else if (newInterval[0] > interval[1]) {
                ans.push(interval);
            }

            // interval is completely after newInterval
            else if (newInterval[1] < interval[0]) {
                ans.push(newInterval, interval);
                inserted = true;
            }

            //overlap 
            else {
                newInterval[0] = Math.min(interval[0], newInterval[0]);
                newInterval[1] = Math.max(interval[1], newInterval[1]);
            }
        }

        if(!inserted){
            ans.push(newInterval)
        }

        return ans;
    }
}
