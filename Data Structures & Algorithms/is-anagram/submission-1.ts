class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

       if(s.length!==t.length)
        return false;

        const freqS=new Array(26).fill(0);
        const freqT=new Array(26).fill(0);

        for(let i=0;i<t.length;i++){
            freqS[s[i].charCodeAt(0)-97]++
            freqT[t[i].charCodeAt(0)-97]++
        }

        return freqS.join(',')===freqT.join(',')


    }
}
