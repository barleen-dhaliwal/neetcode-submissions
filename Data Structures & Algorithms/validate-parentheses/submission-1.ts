class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const stack=[];
        let i=0;
        const matches={
            ')':'(',
            '}':'{',
            ']':'[',

        }
        while(i<s.length){
            if(s[i] in matches){
                const top=stack.pop();
                if(top===matches[s[i]])
                    i++;
                else
                    return false;
            }else
                stack.push(s[i++])
        }
        return stack.length===0;
    }
}
