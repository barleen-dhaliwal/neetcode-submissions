class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // let l = 0;
        // let r = 0;
        // let ans = 0;
        // let set = new Set();

        // while (r < s.length) {
        //     while (set.has(s[r])) {
        //         set.delete(s[l++]);
        //     }
        //     set.add(s[r]);
        //     ans = Math.max(ans, r - l + 1);
        //     r++;
        // }

        // return ans;



        let l=0;
        let ans=0;
        const lastSeen=new Map<string,number>();
        for(let r=0;r<s.length;r++){

            const index=lastSeen.get(s[r])
            if(index!==undefined){
                l=Math.max(l,index+1);
            }
            lastSeen.set(s[r],r);
            ans=Math.max(ans,r-l+1)
        }

        return ans;
    }
}
