class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const quicksort = (l: number, r: number) => {
            let p = l;
            const pivot = nums[r];

            for (let i = l; i < r; i++) {
                if (nums[i] < pivot) {
                    //swap
                    const temp = nums[p];
                    nums[p] = nums[i];
                    nums[i] = temp;
                    p++;
                }
            }
            //swap
            const temp = nums[p];
            nums[p] = pivot;
            nums[r] = temp;

            if (nums.length - k === p) return nums[p];
            else if (nums.length - k > p) return quicksort(p + 1, r);
            else return quicksort(l, p - 1);
        };

        return quicksort(0, nums.length - 1);
    }
}
