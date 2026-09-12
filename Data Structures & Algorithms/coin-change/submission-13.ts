class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number, map: Map<number, number> = new Map()): number {
        if (amount === 0) return 0;

        if (amount < 0) return -1;

        if (map.has(amount)) {
            return map.get(amount);
        }

        let ans = +Infinity;
        for (let i = 0; i < coins.length; i++) {
            const curr = this.coinChange(coins, amount - coins[i], map);
            if (curr !== -1) {
                ans = Math.min(ans, 1 + curr);
            }
        }

        ans = ans === +Infinity ? -1 : ans;

        map.set(amount, ans);

        return ans;
    }
}
