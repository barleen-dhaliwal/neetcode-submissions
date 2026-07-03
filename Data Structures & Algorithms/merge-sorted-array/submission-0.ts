class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = m - 1;
        let j=n-1

        let w=m+n-1

        while (w >= 0 && i>=0 && j>=0) {
            if(nums1[i]>nums2[j]){
                nums1[w--]=nums1[i--]
            }else{
                nums1[w--]=nums2[j--]
            }
        }
        while(i>=0){
             nums1[w--]=nums1[i--]
        }
         while(j>=0){
             nums1[w--]=nums2[j--]
        }
    }
}
