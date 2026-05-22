class MinStack {
    stack: number[];
    minElementStack: number[];
    constructor() {
        this.stack = [];
        this.minElementStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if (this.minElementStack.length) {
            if (this.minElementStack[this.minElementStack.length - 1] >= val) {
                this.minElementStack.push(val);
            }
        } else {
            this.minElementStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (
            this.stack[this.stack.length - 1] ===
            this.minElementStack[this.minElementStack.length - 1]
        ) {
            this.minElementStack.pop();
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minElementStack[this.minElementStack.length - 1];
    }
}
