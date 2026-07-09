class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const ans = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;

            while (i > 0 && nums[i] === nums[i - 1] && i< nums.length-2) i++;

            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
                if (nums[j] + nums[k] === -nums[i]) {
                    ans.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    k--;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                } else if (nums[j] + nums[k] + nums[i] > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }

        return ans;
    }
}
