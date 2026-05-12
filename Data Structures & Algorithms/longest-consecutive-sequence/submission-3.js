class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set=new Set(nums);

        let maxLen=0;
        for(const n of nums){
            if(!set.has(n-1))
            {
                // start of series
                let i=1;
                maxLen=Math.max(maxLen,1)
                while(set.has(n+i)){
                    i++;
                    maxLen=Math.max(maxLen,i)
                }
            }

        }

        return maxLen;
    }
}
