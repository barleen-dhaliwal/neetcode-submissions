class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const ans = [];
        const set = new Set<number>();

        this.helper(nums, ans, [], set);
        return ans;
    }

    helper(nums: number[], ans: number[][], curr: number[], selected: Set<number>) {
        if (curr.length === nums.length) {
            ans.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!selected.has(nums[i])) {
                curr.push(nums[i]);
                selected.add(nums[i]);
                this.helper(nums, ans, curr, selected);
                curr.pop();
                selected.delete(nums[i]);
            }
        }
    }
}
