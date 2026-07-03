class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const mapStoT = new Map<string, string>();
        const mapTtoS = new Map<string, string>();

        for (let i = 0; i < s.length; i++) {
            const mappingStoT = mapStoT.get(s[i]);
            const mappingTtoS = mapTtoS.get(t[i]);

            if (mappingStoT === undefined) {
                mapStoT.set(s[i], t[i]);
            } else if (mappingStoT !== t[i]) return false;
            if (mappingTtoS === undefined) {
                mapTtoS.set(t[i], s[i]);
            } else if (mappingTtoS !== s[i]) return false;
        }

        return true;
    }
}
