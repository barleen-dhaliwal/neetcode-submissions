class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {

        // k=k%nums.length;

        // const temp=Array.from(nums)

        // for(let i=k;i<nums.length;i++){
        //     nums[i]=temp[i-k]
        // }
        // for(let i=0;i<k;i++){
        //     nums[i]=temp[temp.length-k+i]
        // }


        k=k%nums.length;
        if(k===0)
            return;
        
        this.reverse(nums,0,nums.length-1)
        this.reverse(nums,0,k-1)
        this.reverse(nums,k,nums.length-1)


    }

    reverse(arr:number[], start:number, end:number){

        while(start<end){
            const temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }

    }
}
