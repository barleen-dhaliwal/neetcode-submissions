class NumArray {
    nums: number[];
    prefix: number[];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.nums = nums;
        this.prefix = new Array(this.nums.length);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            this.prefix[i] = sum;
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        if (left === 0) return this.prefix[right];
        return this.prefix[right] - this.prefix[left - 1];
    }
}
