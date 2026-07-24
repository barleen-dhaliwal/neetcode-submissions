class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";

        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let ans = [];

        let i = 0;
        let n = 0;

        while (i < str.length) {
            if (str[i] >= "0" && str[i] <= "9") {
                n = n * 10 + Number(str[i]);
                i++;
            } else if (str[i] === "#") {
                //read n characters
                i++;
                ans.push(str.substring(i,i+n))
                i=i+n;
                n=0;
            }
        }

        return ans;
    }
}
