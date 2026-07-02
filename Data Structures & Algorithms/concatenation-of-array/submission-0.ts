class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {

        const array= new Array(2*nums.length);

        for(let i=0;i<array.length;i++){
            if(i<nums.length)
            array[i]=nums[i]
            else
            array[i]=nums[i-nums.length];
        }

        return array;
    }
}
