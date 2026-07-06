class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        // APPROACH 1
        // const map=new Map<number,number>();
        // for(let i=0;i<nums.length;i++){
        //     const curr=map.get(nums[i]) || 0
        //     map.set(nums[i],curr+1);
        // }

        // return [...map.keys()].sort((a,b)=>map.get(b)-map.get(a)).slice(0,k)


        const map=new Map<number,number>();
        for(let i=0;i<nums.length;i++){
            const curr=map.get(nums[i]) || 0
            map.set(nums[i],curr+1);
        }

        const buckets=new Array<number[]>(nums.length+1).fill(null).map(()=>[])
        for(const [key,freq] of map.entries()){
            buckets[freq].push(key)
        }

        const ans=[];
        for(let i=buckets.length-1;i>=0;i--){
            while(ans.length<k&&buckets[i].length){
                ans.push(buckets[i].pop())
            }
        }

        return ans;
        

        
       
        
        
    }
}
