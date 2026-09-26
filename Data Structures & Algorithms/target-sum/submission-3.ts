class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const map = new Map<string, number>();
        return this.findTargetSumWaysHelper(nums, target, 0, 0, map);
    }

    findTargetSumWaysHelper(
        nums: number[],
        target: number,
        currSum: number,
        index: number,
        map: Map<string, number>,
    ): number {
        if (index === nums.length && currSum === target) return 1;
        if (index === nums.length) return 0;

        const key = this.getKey(index, currSum);
        if (map.has(key)) return map.get(key);

        const ways =
            this.findTargetSumWaysHelper(nums, target, currSum + nums[index], index + 1, map) +
            this.findTargetSumWaysHelper(nums, target, currSum - nums[index], index + 1, map);
        map.set(key, ways);
        return ways;
    }

    getKey(index: number, sum: number) {
        return `${index}_${sum}`;
    }
}
