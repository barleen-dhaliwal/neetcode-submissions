class ListNode {
    key: number;
    val: number;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    left: ListNode;
    right: ListNode;
    capacity: number;
    cache: Map<number, ListNode>;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, ListNode>();

        this.left = new ListNode(0, 0);
        this.right = new ListNode(0, 0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    deleteNode(node: ListNode) {
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    insertAtEnd(node: ListNode) {
        const prev = this.right.prev;
        const next = this.right;

        node.next = next;
        node.prev = prev;

        prev.next = node;
        next.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const ans = this.cache.get(key);
        if (ans) {
            this.deleteNode(ans);
            this.insertAtEnd(ans);
            return ans.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const newNode = new ListNode(key, value);
        const curr = this.cache.get(key);
        if (curr) {
            this.deleteNode(curr);
            this.insertAtEnd(newNode);
            this.cache.set(key, newNode);
        } else {
            if (this.cache.size === this.capacity) {
                this.cache.delete(this.left.next.key)
                this.deleteNode(this.left.next);
            }
            this.insertAtEnd(newNode);
            this.cache.set(key, newNode);
        }
    }
}
