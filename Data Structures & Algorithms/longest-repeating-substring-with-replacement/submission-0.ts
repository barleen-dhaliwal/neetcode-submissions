class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let frequencyMap=new Map<string,number>();
        let l=0;
        let mostFreqCharFrequency=0;
        let maxSize=0;

        for(let r=0;r<s.length;r++){

            let f=frequencyMap.get(s[r]) || 0;
            frequencyMap.set(s[r],f+1);
            mostFreqCharFrequency=Math.max(mostFreqCharFrequency,f+1)
            let replacements=r-l+1-mostFreqCharFrequency;
            while(replacements>k){
                let cf=frequencyMap.get(s[l]);
                frequencyMap.set(s[l],cf-1);
                l++;
                //check for most frequent element and update replacements accordingly
                mostFreqCharFrequency=Math.max(...frequencyMap.values())
                replacements=r-l+1-mostFreqCharFrequency;
            }
            maxSize=Math.max(maxSize,r-l+1);
        }
        return maxSize;
    }
}
