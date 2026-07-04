class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let i = 0;
        let j = 0;

        while (j < s.length && i < t.length) {
            if (s[j] === t[i]) {
                i++;
            }
            j++;
        }

        return t.length-i;
    }
}
