class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack: string, needle: string): number {
        //    for(let i=0;i<=haystack.length-needle.length;i++){
        //         if(haystack.substring(i,i+needle.length)===needle)
        //             return i;

        //    }
        //    return -1;
        let i = 0;
        while (haystack.length) {
            if (haystack.startsWith(needle)) {
                return i;
            } else i++;
            haystack = haystack.substring(1);
        }

        return -1;
    }
}
