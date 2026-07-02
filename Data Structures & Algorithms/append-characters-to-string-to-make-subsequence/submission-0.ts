class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {

        let i=0;
        let j=0;
        while(j<t.length && i<s.length){
            if(t[j]===s[i]){
                j++;
            }
            i++;
        }

        return t.length-j;
    }
}
