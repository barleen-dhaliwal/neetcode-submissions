class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        let s1F = new Array(26).fill(0);
        let windowF = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1F[s1[i].charCodeAt(0) - 97]++;
            windowF[s2[i].charCodeAt(0) - 97]++;
        }

        if (this.valid(s1F, windowF)) return true;

        let l = 0;

        for (let r = s1.length; r < s2.length; r++) {
            windowF[s2[l++].charCodeAt(0) - 97]--;
            windowF[s2[r].charCodeAt(0) - 97]++;
            if (this.valid(s1F, windowF)) {
                return true;
            }
        }

        return false;
    }
    valid(map1: number[], map2: number[]) {
        for (let i = 0; i < 26; i++) {
            if (map1[i] !== map2[i]) return false;
        }
        return true;
    }
}
