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
            let newNode;
            if (map.has(curr)) {
                newNode = map.get(curr);
            } else {
                newNode = new Node(curr.val);
                map.set(curr, newNode);
            }

            if (curr.next) {
                if (map.has(curr.next)) {
                    newNode.next = map.get(curr.next);
                } else {
                    const next = new Node(curr.next.val);
                    newNode.next = next;
                    map.set(curr.next, next);
                }
            }

            if (curr.random) {
                if (map.has(curr.random)) {
                    newNode.random = map.get(curr.random);
                } else {
                    const random = new Node(curr.random.val);
                    newNode.random = random;
                    map.set(curr.random, random);
                }
            }

            curr = curr.next;
        }

        return map.get(head);
    }
}
