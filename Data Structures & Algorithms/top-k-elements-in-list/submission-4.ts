class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const map=new Map<number,number>();
        for(let i=0;i<nums.length;i++){
            const curr=map.get(nums[i]) || 0
            map.set(nums[i],curr+1);
        }

        return [...map.keys()].sort((a,b)=>map.get(b)-map.get(a)).slice(0,k)
        
       
        
        
    }
}
