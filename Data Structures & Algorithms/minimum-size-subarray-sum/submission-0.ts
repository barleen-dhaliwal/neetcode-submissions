class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let ans = +Infinity;
        let sum = 0;
        let l = 0;
        let r = 0;
        while (r < nums.length) {
            sum += nums[r];
            while (sum >= target) {
                ans = Math.min(r - l + 1, ans);
                sum -= nums[l];
                l++;
            }
            r++;
        }

        return ans === +Infinity ? 0 : ans;
    }
}
