class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const ans = [];
        this.helper(nums, [], ans);
        return ans;
    }

    helper(nums: number[], res: number[], ans: number[][]) {
        if (nums.length === 0) {
            ans.push(res);
            return;
        }

        this.helper(nums.slice(1), [...res], ans);
        this.helper(nums.slice(1), [nums[0], ...res], ans);
    }
}
