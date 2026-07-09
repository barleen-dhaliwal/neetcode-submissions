class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        if(!nums.length)
            return 0;

        let l=0;
        let r=1
        let ans=1;
        nums.sort((a,b)=>a-b)

        while(r<nums.length){
            if(nums[r-1]===nums[r]){
                r++;
                continue
            }

            if(nums[r]-1===nums[r-1]){
                ans=Math.max(ans, nums[r]-nums[l]+1)
            }else{
                l=r;
            }
            r++;
        }

        return ans;
    }
}
