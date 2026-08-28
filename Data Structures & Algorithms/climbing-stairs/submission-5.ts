class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) return n;
        let prev1 = 1;
        let prev2 = 2;
        for (let i = 3; i <= n; i++) {
            const steps = prev1 + prev2;
            prev1 = prev2;
            prev2 = steps;
        }

        return prev2;
    }
}
