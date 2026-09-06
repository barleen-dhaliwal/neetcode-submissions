class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.canFinish(piles, mid, h)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    canFinish(piles: number[], rate: number, h: number) {
        let i = 0;
        while (i < piles.length) {
            const hours = Math.ceil(piles[i] / rate);
            h = h - hours;
            if (h < 0) return false;

            i++;
        }

        return true;
    }
}
