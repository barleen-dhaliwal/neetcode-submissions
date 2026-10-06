class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums: number[], k: number): number {
        let ans = 0;

        let l = 0;
        let r = 0;
        let count0s = 0;
        while (r < nums.length) {
            if (nums[r] === 0) count0s++;

            while (count0s > k) {
                if (nums[l] === 0) count0s--;
                l++;
            }

            ans = Math.max(ans, r - l + 1);
            r++;
        }

        return ans;
    }
}
