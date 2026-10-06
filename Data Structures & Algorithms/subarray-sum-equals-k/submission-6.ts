class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const map = new Map<number, number>();
        map.set(0, 1);
        let ans = 0;
        let sum = 0;

        for (const num of nums) {
            sum += num;
            ans += map.get(sum - k) ?? 0;
            const count = map.get(sum) ?? 0;
            map.set(sum, count + 1);
        }

        return ans;
    }
}
