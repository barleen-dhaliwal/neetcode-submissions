class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const ans = [];
        this.dfsHelper(nums, [], ans);
        return ans;
    }
    dfsHelper(nums: number[], permutation: number[], ans: number[][]) {
        if (nums.length === 0) {
            ans.push([...permutation]);
            return;
        }

        for (let curr = 0; curr < nums.length; curr++) {
            permutation.push(nums[curr]);
            const remaining = [...nums.slice(0, curr), ...nums.slice(curr + 1)];

            this.dfsHelper(remaining, permutation, ans);
            permutation.pop();
        }
    }
}
