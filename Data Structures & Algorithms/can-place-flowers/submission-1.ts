class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        if (n > Math.ceil(flowerbed.length / 2)) return false;

        for (let i = 0; i < flowerbed.length; i++) {
            const leftEmpty = i === 0 || flowerbed[i - 1] === 0;
            const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
            if (flowerbed[i] === 0 && leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                n--;

                if (n <= 0) return true;
            }
        }

        return n <= 0;
    }
}
