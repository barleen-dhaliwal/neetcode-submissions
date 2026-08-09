class PNode {
    next: PNode | null;
    prev: PNode | null;
    key: number;
    value: number;
    constructor(key: number, value: number, prev?: PNode | null, next?: PNode | null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    cache: Map<number, PNode>;
    capacity: number;
    left: PNode;
    right: PNode;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.left = new PNode(0, 0, null, null);
        this.right = new PNode(0, 0, null, null);
        this.cache = new Map<number, PNode>();
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    deleteNode(node: PNode) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insertAtEnd(node: PNode) {
        const next = this.right;
        const prev = this.right.prev;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.cache.get(key);
        if (node) {
            // update LL (priority) before returning value
            this.deleteNode(node);
            this.insertAtEnd(node);
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const node = this.cache.get(key);
        if (node) {
            // update the value;
            node.value = value;
            // update the priortiy
            this.deleteNode(node);
            this.insertAtEnd(node);
        } else {
            const newNode = new PNode(key, value);
            this.insertAtEnd(newNode);
            this.cache.set(key, newNode);

            // check capacity and evict
            if (this.cache.size > this.capacity) {
                const nodeToDelete = this.left.next;
                this.deleteNode(nodeToDelete);
                this.cache.delete(nodeToDelete.key);
            }
        }
    }
}
