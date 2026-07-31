class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // for sliding window problems:
    //So the guarantee comes from two facts:
    // For each right, it keeps the best valid window ending there.
    // When a window is invalid, extending it cannot fix it, so moving left does not skip a useful answer.

    characterReplacement(s: string, k: number): number {

        let freqMap=new Map<string,number>();
        let l=0;
        let ans=0;

        for(let r=0;r<s.length;r++){

           const count= freqMap.get(s[r])||0;
           freqMap.set(s[r], count+1);

           while(r-l+1-Math.max(...freqMap.values())>k){
                const c=freqMap.get(s[l])
                freqMap.set(s[l],c-1);
                l++;
           }


            ans=Math.max(ans,r-l+1)

           
        }
        return ans;
    }
}
