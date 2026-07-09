class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {

        let map=new Map<number,number>()
        let sum=0;
        let ans=0;
        map.set(0,1)

        for(let i=0;i<nums.length;i++){
            sum+=nums[i]
            
            const count=map.get(sum-k)??0;
            ans+=count;
           

           const currCount=map.get(sum)??0;
           map.set(sum,currCount+1)
        }  

        return ans;     
    }
}
