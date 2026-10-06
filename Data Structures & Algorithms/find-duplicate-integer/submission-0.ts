class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = nums[0];
        let fast = nums[0];

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) break;
        }

        let pointer = nums[0];

        while (pointer !== fast) {
            pointer = nums[pointer];
            fast = nums[fast];
        }

        return pointer;
    }
}
