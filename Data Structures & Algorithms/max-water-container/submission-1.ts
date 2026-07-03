class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;

        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            max = Math.max(max, Math.min(heights[i], heights[j]) * (j - i));
            if (heights[i] < heights[j]) i++;
            else j--;
        }

        return max;
    }
}
