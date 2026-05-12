class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s=s.toLowerCase();
        let r='';
        for(let c of s){
            if(c>='A'&&c<'Z'|| c>='a'&&c<='z'|| c>='0'&& c<='9')
            r+=c;
        }
        let i=0;
        let j=r.length-1;
        while(i<j){
            if(r[i]!==r[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
}
