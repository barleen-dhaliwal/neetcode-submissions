class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {

        if (t.length > s.length)
            return "";

        let tFreq=new Map<string,number>();
        for(let i=0;i<t.length;i++){
            let f=tFreq.get(t[i])||0;
            tFreq.set(t[i],f+1);
        }
        let requiredConditions = tFreq.size; // number of unique chars needed
        let conditionsSatisfied = 0;

        let windowFreq=new Map<string,number>();
        let l=0;
        let minLen=Infinity;
        let startIndex=-1;
        for(let r=0;r<s.length;r++){
            let f=windowFreq.get(s[r])||0;
            windowFreq.set(s[r],f+1);

             // if this character now satisfies requirement
            if (
                tFreq.has(s[r]) &&
                windowFreq.get(s[r]) === tFreq.get(s[r])
            ) {
                conditionsSatisfied++;
            }

            while(conditionsSatisfied===requiredConditions){
                if(minLen>r-l+1){
                    minLen=r-l+1;
                    startIndex=l;
                }
                windowFreq.set(s[l],windowFreq.get(s[l])-1);
                if(windowFreq.get(s[l])<tFreq.get(s[l])){
                    conditionsSatisfied--;
                }
                l++;

            }

        }
        return startIndex===-1?"":s.substring(startIndex,startIndex+minLen);
    }
}
