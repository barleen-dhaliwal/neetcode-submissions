class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const ans=[];
        nums=nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length-2;i++){

            if(i>0&&nums[i-1]===nums[i])
                continue;
            let j=i+1;
            let k=nums.length-1;
            while(j<k){
                if(nums[j]+nums[k]===-nums[i])
                {
                    ans.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    // skip duplicates
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }else if(nums[j]+nums[k]>-nums[i]){
                    k--;
                }else{
                    j++;
                }
            }


        }
        return ans;
    }
}
