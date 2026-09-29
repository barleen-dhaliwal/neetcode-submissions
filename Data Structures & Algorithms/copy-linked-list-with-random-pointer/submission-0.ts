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
        const oldNewMap = new Map<Node, Node>();
        return this.helper(head, oldNewMap);
    }

    helper(curr: Node | null, oldNewMap: Map<Node, Node>) {
        if (!curr) return curr;
        if (oldNewMap.has(curr)) {
            return oldNewMap.get(curr);
        }

        const newNode = new Node(curr.val);
        oldNewMap.set(curr, newNode);

        newNode.next = this.helper(curr.next, oldNewMap);
        newNode.random = this.helper(curr.random, oldNewMap);


        return newNode;
    }
}
