class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const ans = [];
        this.helper(nums, 0, [], ans);
        return ans;
    }

    helper(nums: number[], i: number, subset: number[], ans: number[][]) {
        if (i === nums.length) {
            ans.push([...subset]);
            return;
        }

        this.helper(nums, i + 1, subset, ans);
        subset.push(nums[i]);
        this.helper(nums, i + 1, subset, ans);
        subset.pop()
    }
}
