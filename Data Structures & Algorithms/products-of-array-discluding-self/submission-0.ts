class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix=new Array(nums.length).fill(1);
        const suff=new Array(nums.length).fill(1);
        let prodP=1;
        let prodS=1;
        for(let i=1;i<nums.length;i++){
            prodP*=nums[i-1];
            prodS*=nums[nums.length-i]
            prefix[i]=prodP;
            suff[nums.length-i-1]=prodS;
        }
        const ans=[];
        for(let i=0;i<nums.length;i++){
            ans.push(prefix[i]*suff[i])
        }
        return ans;

    }
}
