class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const map = new Map<number, number>();
        return this.helper(nums, 0, map);
    }
    helper(nums: number[], i: number, map: Map<number, number>) {
        if (nums.length - i === 1) return nums[nums.length - 1];
        if (nums.length - i === 2) return Math.max(nums[nums.length - 1], nums[nums.length - 2]);

        if (map.has(i)) return map.get(i);

        const ans = Math.max(
            this.helper(nums, i + 1, map),
            nums[i] + this.helper(nums, i + 2, map),
        );

        map.set(i, ans);
        return ans;
    }
}
