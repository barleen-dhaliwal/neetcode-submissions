class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        const ans = [];
        let start = 0;
        let end = nums.length - 1;

        for (let i = nums.length-1; i >= 0; i--) {
            let startNumber = nums[start] * nums[start];
            let endNumber = nums[end] * nums[end];
            if (startNumber > endNumber) {
                ans[i] = startNumber;
                start++;
            } else {
                ans[i] = endNumber;
                end--;
            }
        }
        return ans;
    }
}
