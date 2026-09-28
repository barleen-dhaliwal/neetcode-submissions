class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        let l = 0;
        let r = nums.length - 1;
        const ans = new Array(nums.length);
        let i = nums.length - 1;

        while (l <= r) {
            const l2 = nums[l] * nums[l];
            const r2 = nums[r] * nums[r];
            if (l2 > r2) {
                ans[i--] = l2;
                l++;
            } else {
                ans[i--] = r2;
                r--;
            }
        }

        return ans;
    }
}
