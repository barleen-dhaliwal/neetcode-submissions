class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        if (nums[0] >= 0) return nums.map((x) => x * x);
        if (nums[0] <= 0 && nums[nums.length - 1] <= 0) return nums.map((x) => x * x).reverse();

        const ans = [];
        let negativeP = -1;
        let positiveP = -1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= 0) {
                positiveP = i;
                negativeP = i - 1;
                break;
            }
        }

        while (positiveP < nums.length && negativeP >= 0) {
            let negSq = nums[negativeP] * nums[negativeP];
            let posSq = nums[positiveP] * nums[positiveP];
            if (negSq < posSq) {
                ans.push(negSq);
                negativeP--;
            } else {
                ans.push(posSq);
                positiveP++;
            }
        }

        while (positiveP < nums.length) {
            let posSq = nums[positiveP] * nums[positiveP];
            ans.push(posSq);
            positiveP++;
        }

        while (negativeP >= 0) {
            let negSq = nums[negativeP] * nums[negativeP];
            ans.push(negSq);
            negativeP--;
        }
        return ans;
    }
}
