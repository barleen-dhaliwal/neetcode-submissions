class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            if (nums[l] <= nums[r]) return nums[l];

            let mid = Math.floor((l + r) / 2);
            // mid in left sorted portion
            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            }
            // mid in right sorted portion
            else {
                r = mid;
            }
        }

        return l;
    }
}
