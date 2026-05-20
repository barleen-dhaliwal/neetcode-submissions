class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const fCount1 = new Array(26).fill(0);
        for (const c of s1) {
            fCount1[c.charCodeAt(0) - 97]++;
        }
        const fCount2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            fCount2[s2[i].charCodeAt(0) - 97]++;
        }
        if (fCount1.join(",") === fCount2.join(",")) return true;

        let l = 0;
        let r = s1.length;
        while (r < s2.length) {
            const charCodeL = s2[l].charCodeAt(0) - 97;
            const charCodeR = s2[r].charCodeAt(0) - 97;
            fCount2[charCodeL]--;
            l++;
            fCount2[charCodeR]++;
            r++;
            if (fCount1.join(",") === fCount2.join(",")) return true;
        }
        return false;
    }
}
