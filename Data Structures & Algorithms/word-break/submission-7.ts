class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[], map = new Map<number, boolean>(), index = 0): boolean {
        if (index === s.length) return true;

        if (map.has(index)) return map.get(index);

        for (const word of wordDict) {
            if (s.slice(index, index + word.length) === word) {
                if (this.wordBreak(s, wordDict, map, index + word.length)) {
                    map.set(index, true);
                    return true;
                }
            }
        }
        
        map.set(index, false);
        return false;
    }
}
