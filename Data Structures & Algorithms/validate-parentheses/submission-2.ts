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
         for (const c of s) {
            if (c in matches) {
                const top = stack.pop();
                if (top !== matches[c]) return false;
            } else {
                stack.push(c);
            }
        }
        return stack.length===0;
    }
}
