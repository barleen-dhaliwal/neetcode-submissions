class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const mapS = new Map<string, string>();
        const mapT = new Map<string, string>();

        for (let i = 0; i < s.length; i++) {
            const mappingS = mapS.get(s[i]);
            const mappingT = mapT.get(t[i]);

            if (!mappingS) mapS.set(s[i], t[i]);
            if (!mappingT) mapT.set(t[i], s[i]);
            if (mappingS && mappingS !== t[i]) return false;
            if (mappingT && mappingT !== s[i]) return false;
        }
        return true;
    }
}
