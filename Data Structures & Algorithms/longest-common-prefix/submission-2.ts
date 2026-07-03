class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
      strs=strs.sort();

      let len=0;

      for(let i=0;i<strs[0].length;i++){
        if(strs[0][i]===strs[strs.length-1][i])
            len++;
        else
            break;
      }

      return strs[0].substring(0,len)
    }
}
