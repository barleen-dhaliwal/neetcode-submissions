class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        let prev1 = nums[0];
        let prev2 = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            const curr = Math.max(prev2, prev1 + nums[i]);
            prev1 = prev2;
            prev2 = curr;
        }

        return prev2;
    }
}
