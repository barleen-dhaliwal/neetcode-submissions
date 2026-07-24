class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        return Math.max(this.rob1(nums.slice(1)), this.rob1(nums.slice(0, nums.length - 1)));
    }

    rob1(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        let one = nums[0];
        let two = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            let curr = Math.max(nums[i] + one, two);
            one = two;
            two = curr;
        }

        return two;
    }
}
