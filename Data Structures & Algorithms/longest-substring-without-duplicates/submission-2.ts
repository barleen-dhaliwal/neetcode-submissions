class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) return 0;
        if (s.length === 1) return 1;


        let map=new Map<string,number>();
        let maxLen=0;
        map.set(s[0],0)
        let l=0;
        for( let r=1;r<s.length;r++){
            const dIndex=map.get(s[r]);
            if(dIndex!==undefined){
                maxLen=Math.max(maxLen, (r-l))
                while(l<=dIndex){
                    map.delete(s[l++])
                }
            }
             map.set(s[r],r);

        }
        return Math.max(maxLen, s.length-l);
    }
}
