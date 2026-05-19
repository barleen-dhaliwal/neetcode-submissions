class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {

        const ans=[];

        const dfs=(i:number,curr: number[],total:number)=>{

            if(total===target)
            {
                ans.push([...curr]);
                return;
            }
            if(i>nums.length-1||total>target)
                return;
            
            dfs(i+1,curr,total)
            curr.push(nums[i])
            dfs(i,curr,total+nums[i])
            curr.pop()


        }

        dfs(0,[],0);
        return ans;
    }
}
