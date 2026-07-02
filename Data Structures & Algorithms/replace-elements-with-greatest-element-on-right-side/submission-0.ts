class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {

        let maxTillNow=-1;
    
        for(let i=arr.length-1;i>=0;i--){
            let curr=arr[i];
            arr[i]=maxTillNow;
            if(curr>maxTillNow){
                maxTillNow=curr
            }         
        }

        return arr;
    }
}
