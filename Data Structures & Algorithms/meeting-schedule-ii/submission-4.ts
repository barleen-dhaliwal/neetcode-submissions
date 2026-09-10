/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        intervals.sort((a, b) => a.start - b.start);
        const minHeap = new MinPriorityQueue();

        let ans = 0;

        for (const interval of intervals) {
            if (!minHeap.size() || minHeap.front() > interval.start) {
                minHeap.push(interval.end);
                ans = Math.max(ans, minHeap.size());
            } else {
                minHeap.pop();
                minHeap.push(interval.end);
            }
        }
        return ans;
    }
}
