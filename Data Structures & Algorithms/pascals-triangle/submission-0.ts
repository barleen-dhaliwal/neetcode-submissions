class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {

        let ans=[[1]];

        for(let i=2;i<=numRows;i++){

            const newRow=new Array(i).fill(1);
            for(let j=1;j<i-1;j++){
                newRow[j]=ans[ans.length-1][j-1]+ans[ans.length-1][j]
            }
            ans.push(newRow)

        }

        return ans;

    }
}
