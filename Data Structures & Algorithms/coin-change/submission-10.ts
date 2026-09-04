class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const map = new Map<number, number>();

        return this.helper(coins, amount, map);
    }

    helper(coins: number[], amount: number, map: Map<number, number>) {
        if (amount < 0) return -1;
        if (amount === 0) return 0;

        if (map.has(amount)) return map.get(amount);
        
        let minCoins = +Infinity;
        for (let i = 0; i < coins.length; i++) {
            const res = this.helper(coins, amount - coins[i], map);
            if (res !== -1) {
                minCoins = Math.min(1 + res, minCoins);
            }
        }

        const ans = minCoins === Infinity ? -1 : minCoins;

        map.set(amount, ans);

        return ans;
    }
}
