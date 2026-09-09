class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const ans = [];
        this.helper(nums, target, 0, ans, [],0);
        return ans;
    }

    helper(nums: number[], target: number, sum: number, ans: number[][], selection: number[], start:number) {
        if (sum > target) {
            return;
        } else if (target === sum) {
            ans.push([...selection]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            sum += nums[i];
            selection.push(nums[i]);
            this.helper(nums, target, sum, ans, selection, i);
            sum -= nums[i];
            selection.pop();
        }
    }
}
