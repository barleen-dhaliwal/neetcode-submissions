class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const ans = [];
        this.helperDfs(nums, target, [], 0, ans,0);
        return ans;
    }

    helperDfs(nums: number[], target: number, selected: number[], sum: number, ans: number[][], index:number) {
        if (sum === target) {
            ans.push([...selected]);
            return;
        }
        if (sum > target) return;
        for (let i = index; i < nums.length; i++) {
            selected.push(nums[i]);
            sum += nums[i];
            this.helperDfs(nums, target, selected, sum, ans, i);
            selected.pop();
            sum -= nums[i];

        }
    }
}
