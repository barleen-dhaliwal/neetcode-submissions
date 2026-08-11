class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let ans = nums[0];
        let currSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(currSum + nums[i], nums[i]);
            ans = Math.max(ans, currSum);
        }

        return ans;
    }
}
