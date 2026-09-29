class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let ans = nums[0];
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                ans = nums[i];
            }
            if (nums[i] === ans) {
                count++;
            } else {
                count--;
            }
        }

        return ans;
    }
}
