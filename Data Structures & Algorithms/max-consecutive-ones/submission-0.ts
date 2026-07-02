class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {

        let maxCount=0;
        let curr=0;
        for(const n of nums){
            if(n){
                curr++
            }
            else{
                maxCount=Math.max(maxCount,curr);
                curr=0;
            }
        }

        return Math.max(maxCount,curr);
    }
}
