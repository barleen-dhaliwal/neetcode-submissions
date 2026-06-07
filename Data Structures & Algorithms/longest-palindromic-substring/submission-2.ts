class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        if (s.length === 1) return s;

        let maxLen = 1;
        let startIndex = 0;

        for (let i = 0; i < s.length; i++) {
            // treat current char as center

            // odd palindrome
            let leftO = i - 1;
            let rightO = i + 1;
            let countO = 1;
            while (leftO >= 0 && rightO < s.length) {
                if (s[leftO] !== s[rightO]) break;
                countO += 2;
                if (countO > maxLen) {
                    startIndex = leftO;
                    maxLen = countO;
                }
                leftO--;
                rightO++;
            }

            //even palindrome
            let leftE = i;
            let rightE = i + 1;
            let countE = 0;
            while (leftE >= 0 && rightE < s.length) {
                if (s[leftE] !== s[rightE]) break;
                countE += 2;
                if (countE > maxLen) {
                    startIndex = leftE;
                    maxLen = countE;
                }
                leftE--;
                rightE++;
            }
        }

        return s.slice(startIndex, startIndex + maxLen);
    }
}
