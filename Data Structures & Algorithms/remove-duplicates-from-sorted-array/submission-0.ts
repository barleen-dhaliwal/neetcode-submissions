class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {


        let l=0;
        for(let i=1;i<nums.length;i++){
            if(nums[i]!==nums[l]){
                nums[++l]=nums[i]
            }
        }
        return l+1;
    }
}
