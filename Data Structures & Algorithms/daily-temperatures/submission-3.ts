class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
                const curr = stack.pop();
                res[curr[1]] = i - curr[1];
            }
            stack.push([temperatures[i], i]);
        }

        return res;
    }
}
