class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minSoFar = prices[0];
        let sellIndex = 0;
        let ans = 0;
        while (sellIndex < prices.length) {
            if (prices[sellIndex] < minSoFar) {
                minSoFar = prices[sellIndex];
            } else {
                ans = Math.max(ans, prices[sellIndex] - minSoFar);
            }
            sellIndex++;
        }

        return ans;
    }
}
