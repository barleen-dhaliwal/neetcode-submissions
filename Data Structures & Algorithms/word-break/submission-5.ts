class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const dp = new Array<boolean>(s.length + 1).fill(false);

        // An empty suffix can always be segmented.
        dp[s.length] = true;

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = 0; j < wordDict.length; j++) {
                if (s.length - i < wordDict[j].length) continue;
                if (
                    s.substring(i, i + wordDict[j].length) === wordDict[j] &&
                    dp[i + wordDict[j].length]
                ) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[0];
    }
}
