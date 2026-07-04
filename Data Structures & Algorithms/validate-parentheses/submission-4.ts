class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        const pairs = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        let i = 0;
        while (i < s.length) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") stack.push(s[i]);
            else {
                const bracket = stack.pop();
                if (bracket === undefined) return false;
                if (s[i] !== pairs[bracket]) return false;
            }
            i++;
        }

        return !stack.length;
    }
}
