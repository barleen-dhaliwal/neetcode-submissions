// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return head;

        const map = new Map<Node, Node>();

        let curr = head;
        while (curr) {
            const newNode = new Node(curr.val);
            map.set(curr, newNode);
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const node = map.get(curr);
            if (curr.next) node.next = map.get(curr.next);
            if (curr.random) node.random = map.get(curr.random);
            curr = curr.next;
        }

        return map.get(head);
    }
}
