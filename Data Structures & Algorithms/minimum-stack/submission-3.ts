class MinStack {
    stack
    minStack
    constructor() {
        this.stack=[];
        this.minStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(this.stack.length===0){
            this.minStack.push(val);
        }else{
            const currMin=this.minStack[this.minStack.length-1];
            this.minStack.push(Math.min(currMin, val))
        }
        this.stack.push(val);
        
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {

        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length-1]
    }
}
