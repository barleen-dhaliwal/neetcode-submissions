class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const stack:number[]=[];

        for(const c of tokens){
            if(Number(c) || Number(c)===0){
                stack.push(Number(c))
                
            }
            else{
                const n1=stack.pop();
                const n2=stack.pop();
                if(c==='+'){
                    stack.push(n1+n2);
                }
                if(c==='*'){
                    stack.push(n1*n2);
                }
                if(c==='-'){
                    stack.push(n2-n1);
                }
                if(c==='/'){
                    stack.push(Math.trunc(n2/n1));
                }

            }
            
        }
        return stack.pop()
    }
}
