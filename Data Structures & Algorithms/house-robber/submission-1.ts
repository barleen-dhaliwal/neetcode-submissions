class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        if(nums.length===1)
            return nums[0];

        let one=nums[0]; // maximum we can get if there is 1 house
        let two=Math.max(nums[0],nums[1]) //maximum we can get if there are only 2 houses


        for(let i=2;i<nums.length;i++){

            //decide to rob house at i, decide to not rob house at i
            const curr=Math.max(nums[i]+one, two);
            one=two;
            two=curr;
        }

        return two;

    }
}
