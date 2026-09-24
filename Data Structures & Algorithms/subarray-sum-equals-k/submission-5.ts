class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const map = new Map<number, number>(); // map of prefix sums
        map.set(0, 1);
        let ans = 0;
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            ans += map.get(sum - k) || 0;
            map.set(sum, (map.get(sum) ?? 0) + 1);
        }

        return ans;
    }
}
