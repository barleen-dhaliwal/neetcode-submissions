class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {


        let l=0;
        let r=nums.length-1;
        while(l<r){
            let mid=Math.floor((l+r)/2);
            if(nums[mid]<nums[r])
                r=mid;
            else
                l=mid+1;
                
        }
        console.log(nums.slice(l,nums.length))

        const fl=this.binSearch(nums.slice(0,l), target);
        if(fl!==-1)
            return fl;
        const fr=this.binSearch(nums.slice(l,nums.length), target);
        console.log(fr)
        return fr!==-1?l+fr:fr;
    }
    
    binSearch(nums: number[], target: number){
        let l=0;
        let r=nums.length-1;
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            if(nums[mid]===target)
                return mid;
            else if(nums[mid]<target)
                l=mid+1;
            else
                  r=mid-1;
                
        }
        return -1;

    }
}
