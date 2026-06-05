class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {

        // top-down approach
        
        const memo=new Map<number,number>();

        const dfs=(num:number)=>{

            if(num<=2)
                return num;
            if(memo.has(num)){
                return memo.get(num)
            }
            
            const ans=dfs(num-1)+dfs(num-2);
            memo.set(num,ans);
            return ans;
        }

        return dfs(n);


    }
}
