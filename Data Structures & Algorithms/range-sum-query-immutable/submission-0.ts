class NumArray {
    nums:number[]
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.nums=nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        let sum=0;
        for(let i=left;i<=right;i++){
            sum+=this.nums[i]
        }
        return sum;
    }
}
