class ListNode {
    prev: ListNode;
    next: ListNode;
    val: number;
    constructor(val: number) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    left: ListNode;
    right: ListNode;
    constructor() {
        this.left = new ListNode(0);
        this.right = new ListNode(0);

        this.left.next=this.right
        this.right.prev=this.left
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.left.next;
        while (curr && index > 0) {
            curr = curr.next;
            index--;
        }
        if (curr && curr !== this.right) return curr.val;
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const newNode = new ListNode(val);
        const next = this.left.next;
        const prev = this.left;
        newNode.next = next;
        newNode.prev = prev;
        prev.next = newNode;
        next.prev = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newNode = new ListNode(val);
        const next = this.right;
        const prev = this.right.prev;
        newNode.next = next;
        newNode.prev = prev;
        prev.next = newNode;
        next.prev = newNode;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        let curr = this.left.next;
        while (curr && index > 0) {
            curr = curr.next;
            index--;
        }

        if (curr) {
            const newNode = new ListNode(val);
            const next = curr;
            const prev = curr.prev;
            newNode.next = next;
            newNode.prev = prev;
            prev.next = newNode;
            next.prev = newNode;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {

        let curr = this.left.next;
        while (curr && index > 0) {
            curr = curr.next;
            index--;
        }

        if(curr && curr!==this.right){
            const prev=curr.prev;
            const next=curr.next;

            prev.next=next
            next.prev=prev
        }


    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
