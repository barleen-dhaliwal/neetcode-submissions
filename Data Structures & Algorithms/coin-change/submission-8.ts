class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const map = new Map<number, number>();

        const helper = (coins: number[], amount: number) => {
            if (amount < 0) return -1;
            if (amount === 0) return 0;

            let minCoins = +Infinity;
            for (let i = 0; i < coins.length; i++) {
                const res = map.get(amount - coins[i]) ?? helper(coins, amount - coins[i]);
                if (res !== -1) {
                    minCoins = Math.min(1 + res, minCoins);
                }
            }

            const ans = minCoins === Infinity ? -1 : minCoins;

            map.set(amount, ans);

            return ans;
        };

        return helper(coins,amount);
    }
}
