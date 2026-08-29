class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let p = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums[p] = nums[i];
                p++;
            }
        }

        for (let i = p; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}
