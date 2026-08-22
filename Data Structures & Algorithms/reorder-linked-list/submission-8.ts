/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head) return;

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let p1 = head;
        let p2 = this.reverseList(slow);

        while (p1 && p2 && p1 !== p2) {
            const p1Next = p1.next;
            const p2Next = p2.next;
            p1.next = p2;
            if (p1Next !== p2) p2.next = p1Next;
            p1 = p1Next;
            p2 = p2Next;
        }
    }

    reverseList(head: ListNode) {
        let prev = null;
        let curr = head;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
