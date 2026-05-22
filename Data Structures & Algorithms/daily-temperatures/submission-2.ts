class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: { val: number; index: number }[] = [];
        const result = new Array(temperatures.length).fill(0);

        for (const [index, temp] of temperatures.entries()) {
            while (stack.length && stack[stack.length - 1].val < temp) {
                const poppedElement = stack.pop();
                result[poppedElement.index] = index - poppedElement.index;
            }

            stack.push({ val: temp, index });
        }

        return result;
    }
}
