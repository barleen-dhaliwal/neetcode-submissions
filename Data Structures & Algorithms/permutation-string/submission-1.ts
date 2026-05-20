class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const neededF = new Array(26).fill(0);
        for (const c of s1) {
            neededF[c.charCodeAt(0) - 97]++;
        }
        const windowF = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            windowF[s2[i].charCodeAt(0) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (neededF[i] === windowF[i]) matches++;
        }

        if (matches === 26) return true;

        let l = 0;
        let r = s1.length;
        while (r < s2.length) {
            const charCodeL = s2[l].charCodeAt(0) - 97;
            const charCodeR = s2[r].charCodeAt(0) - 97;
            windowF[charCodeR]++;
            r++;
            if (windowF[charCodeR] === neededF[charCodeR]) {
                matches++;
            } else if (windowF[charCodeR] === neededF[charCodeR] + 1) {
                matches--;
            }

            windowF[charCodeL]--;
            l++;
            if (windowF[charCodeL] === neededF[charCodeL]) {
                matches++;
            } else if (windowF[charCodeL] + 1 === neededF[charCodeL]) {
                matches--;
            }

            if (matches === 26) return true;
        }
        return false;
    }
}
