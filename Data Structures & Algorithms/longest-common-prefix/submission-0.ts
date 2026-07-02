class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let currIndex = 0;
        while (currIndex < strs[0].length) {
            for (let i = 1; i < strs.length; i++) {
                if (strs[i][currIndex] !== strs[0][currIndex]) {
                  return currIndex===0?"":strs[0].substring(0,currIndex)
                }
            }
            currIndex++;
        }

        return strs[0];
    }
}
