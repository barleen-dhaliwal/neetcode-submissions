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
        for(const num of set){
            if(set.has(num-1))
                continue;
            else
            {
                let j=1;
                while(set.has(num+j)){
                    j++;
                }
                len=Math.max(len,j)
            }
            
        }

        return len;

      }
}
