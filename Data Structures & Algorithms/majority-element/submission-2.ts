class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // nums.sort();
        //  return nums[Math.floor(nums.length/2)]

        // "The algorithm is based on pairwise cancellation.
        // Every time we see a number different from the current candidate,
        // we cancel one occurrence of the candidate with that different number.
        // Since the majority element appears more than all other elements combined,
        // it can never be completely canceled.
        // The count variable tracks the number of unmatched occurrences of the
        // current candidate. When the count reaches zero,
        // it means everything we've seen so far has canceled out,
        // so we can safely choose the next element as a new candidate.
        // By the end of the scan, the only element that can survive all
        // these cancellations is the majority element."

        let candidate;
        let count = 0;
        for (const num of nums) {
            if (count === 0) {
                candidate = num;
            }
            if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate;
    }
}
