class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let top=1; //ways to reach the top from top
        let prev=1; //ways to reach the top from prev step

        for(let i=n-2;i>=0;i--){
            //ways to reach the top from current step
            let curr=prev+top;
            top=prev;
            prev=curr;
        }

        return prev;

    }
}
