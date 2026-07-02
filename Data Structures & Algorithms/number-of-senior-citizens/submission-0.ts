class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let ans=0;

        for(const p of details){

            const age=Number(p.substring(11,13))
            if(age>60)
            {
            ans++            }
        }
        return ans
    }
}
