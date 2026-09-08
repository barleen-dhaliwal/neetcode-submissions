class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const cache = new Map<number, boolean>();
        return this.wordBreakHelper(s, wordDict, 0, cache);
    }

    wordBreakHelper(s: string, wordDict: string[], index: number, cache: Map<number, boolean>) {
        if (cache.has(index)) return cache.get(index);
        if (index === s.length) return true;

        for (let i = 0; i < wordDict.length; i++) {
            //check match
            if (wordDict[i] === s.substring(index, index + wordDict[i].length)) {
                if (this.wordBreakHelper(s, wordDict, index + wordDict[i].length, cache)) {
                    cache.set(index, true);
                    return true;
                }
            }
        }
        cache.set(index, false);
        return false;
    }
}
