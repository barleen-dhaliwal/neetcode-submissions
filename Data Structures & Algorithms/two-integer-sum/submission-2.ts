class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const map=new Map<number,number>(); // value, index

        for(let i=0;i<nums.length;i++){ // a+b=target target-b=a
            const index=map.get(target-nums[i])
            if(index!==undefined){
                return [index,i]
            }
            map.set(nums[i],i)
        }

    }
}
