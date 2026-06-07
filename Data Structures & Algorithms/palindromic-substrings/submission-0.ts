class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            //each individual char is a palindrome
            count++;

            //exapnd from center

            //odd
            let left = i - 1;
            let right = i + 1;
            while (left >= 0 && right < s.length) {
                if (s[left] !== s[right]) break;
                count++;
                left--;
                right++;
            }

            //even
            left = i;
            right = i + 1;
            while (left >= 0 && right < s.length) {
                if (s[left] !== s[right]) break;
                count++;
                left--;
                right++;
            }
        }

        return count;
    }
}
