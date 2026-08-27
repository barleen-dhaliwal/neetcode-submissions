class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1: number[], nums2: number[]): number[] {
        const set = new Set(nums1);
        const ans = new Set()
        for (const n of nums2) {
            if (set.has(n)) ans.add(n);
        }
        return Array.from(ans) as number[];
    }
}
