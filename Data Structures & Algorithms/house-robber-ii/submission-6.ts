class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, nums.length - 1)));
    }

    helper(nums: number[]) {
        let prev1 = 0;
        let prev2 = 0;

        for (let i = 0; i < nums.length; i++) {
            const curr = Math.max(prev1 + nums[i], prev2);
            prev1 = prev2;
            prev2 = curr;
        }

        return prev2;
    }
}
