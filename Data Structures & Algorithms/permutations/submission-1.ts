class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const ans = [];
        const used = new Array<boolean>(nums.length).fill(false);
        this.dfsHelper(nums, [], used, ans);
        return ans;
    }
    dfsHelper(nums: number[], permutation: number[], used: boolean[], ans: number[][]) {
        if (permutation.length === nums.length) {
            ans.push([...permutation]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            permutation.push(nums[i]);
            used[i] = true;
            this.dfsHelper(nums, permutation, used, ans);
            used[i] = false;
            permutation.pop();
        }
    }
}
