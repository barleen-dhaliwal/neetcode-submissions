class NumArray {
    prefix: number[];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.prefix = new Array(nums.length+1).fill(0);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            this.prefix[i+1] = sum;
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.prefix[right+1] - this.prefix[left];
    }
}
