class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

       if(s.length!==t.length)
        return false;

        const freq=new Array(26).fill(0);

        for(let i=0;i<t.length;i++){
            freq[s[i].charCodeAt(0)-97]++
            freq[t[i].charCodeAt(0)-97]--
        }

        for(let i=0;i<26;i++){
            if(freq[i]!==0)
                return false;
        }

        return true;

    }
}
