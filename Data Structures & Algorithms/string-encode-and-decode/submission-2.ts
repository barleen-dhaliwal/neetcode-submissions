class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let ans="";
        for(const s of strs){
            ans+=s.length+'#'+s;
        }
        // console.log(ans)
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        let n=0;
        let ans=[]
        let i=0;
        while(i<str.length){
            if(str[i] >= '0' && str[i] <= '9'){
                n=n*10+Number(str[i]);
                i++;
            }
            else if(str[i]==='#'){
                i++;
                let r=''
                ans.push(str.substring(i,i+n))
                i+=n;
                n=0;
            }
        }
        return ans;
    }
}
