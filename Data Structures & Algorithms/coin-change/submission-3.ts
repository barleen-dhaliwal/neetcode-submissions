class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const map = new Map<number, number>();
        const logic = (coins: number[], amount: number) => {
            if (amount < 0) return -1;
            if (amount === 0) return 0;
            if (map.has(amount)) return map.get(amount);
            let min = +Infinity;
            for (let i = 0; i < coins.length; i++) {
                if (coins[i] <= amount) {
                    const res = logic(coins, amount - coins[i]);
                    if (res >= 0) {
                        min = Math.min(min, 1 + res);
                    }
                }
            }
            if (min === Infinity) {
                map.set(amount, -1);
                return -1;
            }
            map.set(amount, min);
            return min;
        };

        return logic(coins, amount);
    }
}
