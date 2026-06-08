class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const map=new Map<string,number>();
        const logic = (s: string) => {
            if (!s.length) return 1;
            // invalid combination
            if (s[0] === "0") {
                return 0;
            }
            if(map.has(s)){
                return map.get(s)
            }
            let ways = 0;
            // check if 2 digit number is valid
            if (s.length > 1) {
                const n = Number(s[0]) * 10 + Number(s[1]);
                if (n <= 26) {
                    ways += logic(s.substring(2));
                }
            }
            ways += logic(s.substring(1));
            map.set(s,ways)
            return ways;
        }
        return logic(s);
    }
}
