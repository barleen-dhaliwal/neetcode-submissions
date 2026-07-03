class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack: string, needle: string): number {
        let l = 0;

        while (l < haystack.length) {
            if (haystack[l] === needle[0]) {
                if (haystack.substring(l).startsWith(needle)) return l;
            }
            l++;
        }

        return -1;
    }
}
