class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set<string>();
        let maxLen = 0;
        let l = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l++]);
        }
        set.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
    }
}
