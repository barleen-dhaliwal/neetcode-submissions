class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        let pre=Array(nums.length).fill(1)
        let suff=Array(nums.length).fill(1)
        const res=new Array(nums.length).fill(1);

        for(let i=1;i<nums.length;i++){
         pre[i]=nums[i-1]*pre[i-1];
         suff[nums.length-i-1]=nums[nums.length-i]*suff[nums.length-i]
        }

        for(let i=0;i<res.length;i++){
            res[i]=pre[i]*suff[i]
        }
        return res;

    }
}
