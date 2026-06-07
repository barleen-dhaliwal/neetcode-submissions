class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const houseRob = (nums: number[]) => {
            if(nums.length===0) return 0;
            if (nums.length === 1) return nums[0];
            if (nums.length === 2) return Math.max(nums[0], nums[1]);

            let one=nums[0];
            let two=Math.max(nums[0], nums[1]);
            for(let i=2;i<nums.length;i++){
                let curr=Math.max(nums[i]+one,two);
                one=two;
                two=curr;
            }
            return two
        };

        return Math.max(nums[0]+houseRob(nums.slice(2,nums.length-1)),houseRob(nums.slice(1)))
    }
}
