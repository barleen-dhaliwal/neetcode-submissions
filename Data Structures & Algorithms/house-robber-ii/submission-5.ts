class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, nums.length - 1)));
    }

    helper(nums: number[]) {
        let prev1 = nums[0];
        let prev2 = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            const curr = Math.max(prev1 + nums[i], prev2);
            prev1 = prev2;
            prev2 = curr;
        }

        return prev2;
    }
}
