class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {
        const freq = new Array(26).fill(0);
        for (const c of s) {
            freq[c.charCodeAt(0) - 97]++;
        }

        let maxOdd = -Infinity;
        let minEven = Infinity;

        for (const f of freq) {
            if (f === 0) continue;

            if (f % 2 === 0) {
                minEven = Math.min(minEven, f);
            } else {
                maxOdd = Math.max(maxOdd, f);
            }
        }

        return maxOdd - minEven;
    }
}
