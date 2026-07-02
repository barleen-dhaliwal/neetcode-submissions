class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let sum = 0;
        for (const n of nums) {
            sum += n;
        }
        let curr = 0;
        for (let i = 0; i < nums.length; i++) {
            if (curr === sum - curr - nums[i]) return i;

            curr += nums[i];
        }

        return -1;
    }
}
