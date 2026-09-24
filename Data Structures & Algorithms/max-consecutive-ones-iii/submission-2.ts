class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums: number[], k: number): number {
        let numberOf0s = 0;
        let ans = 0;
        let start = 0;
        let end = 0;
        while (end < nums.length) {
            if (nums[end] === 0) {
                numberOf0s++;
            }
            while (numberOf0s - k > 0) {
                if (nums[start] === 0) {
                    numberOf0s--;
                }
                start++;
            }
            ans = Math.max(end - start + 1, ans);
            end++;
        }

        return ans;
    }
}
