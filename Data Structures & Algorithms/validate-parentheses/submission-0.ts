class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const stack=[];
        let i=0;
        while(i<s.length){
            if(s[i]==='('||s[i]==='{'||s[i]==='[')
                stack.push(s[i++]);
            else{
                const b=stack.pop();
                if(b==='('&&s[i]===')')
                    i++;
                else if(b==='{'&&s[i]==='}')
                    i++;
                else if(b==='['&&s[i]===']')
                    i++;
                else
                    return false;

            }
        }
        return stack.length===0;
    }
}
