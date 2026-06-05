class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n===1)
            return 1;
        if(n===2)
            return 2;
        let one=1; // ways to reach stair 1
        let two=2; // ways to reach stair 2
        for(let i=3;i<=n;i++){
            let curr=one+two;
            one=two;
            two=curr;
        }
        return two;

    }
}
