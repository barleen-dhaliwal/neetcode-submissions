class KthLargest {
    minHeap;
    k;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.minHeap = new MinPriorityQueue();
        this.k = k;
        for (const n of nums) {
            this.minHeap.push(n);
            if (this.minHeap.size() > k) this.minHeap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.push(val);
        if (this.minHeap.size() > this.k) this.minHeap.pop();
        return this.minHeap.front();
    }
}
