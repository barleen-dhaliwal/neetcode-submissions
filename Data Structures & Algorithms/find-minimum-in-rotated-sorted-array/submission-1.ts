class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if(nums[0]<=nums[nums.length-1])
            return nums[0];
        
        let l=0;
        let r=nums.length-1;
        let mid;
        while(l<r){
            mid=Math.floor((l+r)/2);
            if(nums[mid]<nums[r]){
                r=mid;
            }
            else{
                l=mid+1;
            }
        }
        return nums[l];
    }
}
