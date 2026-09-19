class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        const ans = [];
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let startNumber = nums[start] * nums[start];
            let endNumber = nums[end] * nums[end];
            if (startNumber > endNumber) {
                ans.push(startNumber);
                start++;
            } else {
                ans.push(endNumber);
                end--;
            }
        }

        return ans.reverse();
    }
}
