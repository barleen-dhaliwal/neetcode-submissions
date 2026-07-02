class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {


        const freq=new Array(26).fill(0);
        for(const c of s){
            freq[c.charCodeAt(0)-97]++;
        }

        const oddF=[];
        const evenF=[];
        for(const f of freq){
            if(f===0)
            continue
            if(f%2===0)
            evenF.push(f)
            else
            oddF.push(f)
        }

        const maxO=Math.max(...oddF)
        const minE=Math.min(...evenF)

        return maxO - minE;

        
        
    }
}
