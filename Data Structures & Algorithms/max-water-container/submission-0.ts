class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let i=0,j=heights.length-1;
        let maxArea=0;
        while(i<j){
            maxArea=Math.max(Math.min(heights[i],heights[j])*(j-i),maxArea);
            if(heights[i]<heights[j]){
                i++;
            }
            else
                j--;
        }
        return maxArea;
    }
}
