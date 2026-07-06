class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {

        k=k%nums.length;

        const temp=Array.from(nums)

        for(let i=k;i<nums.length;i++){
            nums[i]=temp[i-k]
        }
        for(let i=0;i<k;i++){
            nums[i]=temp[temp.length-k+i]
        }
    }
}
