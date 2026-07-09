class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // For every selling day, the only buying price that matters is the
    // minimum price seen before that day. Any higher previous price would
    // always yield less or equal profit. So as I scan from left to right,
    // I maintain the minimum price seen so far and compute the profit if I sold today. 
    //This guarantees I consider the optimal transaction ending on every day in a single pass.
    
    maxProfit(prices: number[]): number {
        let minSoFar = prices[0];
        let sellIndex = 1;
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
