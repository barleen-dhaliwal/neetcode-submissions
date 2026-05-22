class MinStack {
    stack: (number|null)[]
    minElementStack:number[];
    constructor() {
        this.stack=[];
        this.minElementStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if(this.minElementStack.length)
        {
            if(this.stack[this.minElementStack[this.minElementStack.length-1]]>val){
                this.minElementStack.push(this.stack.length-1)
            }
        }else{
            this.minElementStack.push(0);
        }
        console.log(this.stack,this.minElementStack)

    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.stack.length-1===this.minElementStack[this.minElementStack.length-1]){
            this.minElementStack.pop();
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.minElementStack[this.minElementStack.length-1]];
    }
}
