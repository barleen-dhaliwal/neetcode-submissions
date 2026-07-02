class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {

        let last=nums.length-1;
        for(let i=0;i<=last;i++){
            if(nums[i]===val){
                //swap with last element
                while(nums[last]===val && last>i)
                    last--;
                nums[i]=nums[last];
                nums[last]=val;
                last--;
            }
        }
        console.log(nums)

        return last+1;
    }
}
