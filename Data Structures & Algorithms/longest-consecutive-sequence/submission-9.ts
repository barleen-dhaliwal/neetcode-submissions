class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        if(!nums.length)
            return 0;

        const set=new Set(nums)
        let len=1;

        for(let i=0;i<nums.length;i++){
            if(set.has(nums[i]-1))
                continue;
            else
            {
                let j=1;
                while(set.has(nums[i]+j)){
                    j++;
                }
                len=Math.max(len,j)
            }
            
        }

        return len;

      }
}
