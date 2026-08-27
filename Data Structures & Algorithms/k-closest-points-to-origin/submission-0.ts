class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const maxHeap = new MaxPriorityQueue((point) => point[0] * point[0] + point[1] * point[1]);

        for (const point of points) {
            maxHeap.push(point);
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        return maxHeap.toArray();
    }
}
