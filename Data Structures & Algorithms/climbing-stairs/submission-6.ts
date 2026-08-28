class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        // if (n <= 2) return n;
        // let prev1 = 1;
        // let prev2 = 2;
        // for (let i = 3; i <= n; i++) {
        //     const steps = prev1 + prev2;
        //     prev1 = prev2;
        //     prev2 = steps;
        // }

        // return prev2;

        const map = new Map<number, number>();
        return this.helper(n, map);
    }

    helper(n: number, map: Map<number, number>) {
        if (n <= 2) return n;
        if (map.has(n)) return map.get(n);

        const ans = this.helper(n - 1, map) + this.helper(n - 2, map);
        map.set(n, ans);
        return ans;
    }
}
