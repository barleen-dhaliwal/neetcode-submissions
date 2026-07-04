class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {

        let i=0;
        let j=0;

        while(i<t.length){
            if(s[j]===t[i]){
                j++;
            }
            i++;
        }

        return j===s.length
    }
}
