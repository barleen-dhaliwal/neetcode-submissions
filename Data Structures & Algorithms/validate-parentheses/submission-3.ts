class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const stack=[];

        let i=0;
        while(i<s.length){

            if(s[i]==='('||s[i]==='['||s[i]==='{')
                stack.push(s[i])
            else{
                const bracket=stack.pop();
                if(bracket===undefined)
                    return false;
                
                if(bracket==='(' && s[i]!==')')
                    return false;
                if(bracket==='[' && s[i]!==']')
                    return false;
                if(bracket==='{' && s[i]!=='}')
                    return false;
                
            }
            i++;
        }

        return !stack.length

    }
}
