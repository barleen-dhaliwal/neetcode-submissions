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
        const startTimes = [];
        const endTimes = [];

        for (const interval of intervals) {
            startTimes.push(interval.start);
            endTimes.push(interval.end);
        }

        startTimes.sort((a, b) => a - b);
        endTimes.sort((a, b) => a - b);

        let meetingsGoingOn = 0;
        let ans = 0;

        let startPointer = 0;
        let endPointer = 0;

        while (startPointer < startTimes.length) {
            if (startTimes[startPointer] < endTimes[endPointer]) {
                meetingsGoingOn++;
                startPointer++;
            } else {
                meetingsGoingOn--;
                endPointer++;
            }
            ans = Math.max(ans, meetingsGoingOn);
        }

        return ans;
    }
}
