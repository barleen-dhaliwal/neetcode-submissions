class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {

        const ans=new Array(nums.length);
        for(let i=0;i<nums.length;i++){
            nums[i]=nums[i]*nums[i]
        }

        let l=0;
        let r=nums.length-1;

        for(let i=nums.length-1;i>=0;i--){
            if(nums[l]>nums[r]){
                ans[i]=nums[l++]
            }else
                ans[i]=nums[r--]
        }

        return ans;

    }
}
