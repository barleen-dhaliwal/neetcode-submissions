class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let r = 0;
        let ans = 0;
        let set = new Set();

        while (r < s.length) {
            while (set.has(s[r])) {
                set.delete(s[l++]);
            }
            set.add(s[r]);
            ans = Math.max(ans, r - l + 1);
            r++;
        }

        return ans;
    }
}
