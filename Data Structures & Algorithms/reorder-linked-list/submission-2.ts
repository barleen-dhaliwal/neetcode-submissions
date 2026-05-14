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

        if(!head)
            return;

        //finding mid point
        let slow=head,fast=head;
        while(fast&&fast.next){
            slow=slow.next;
            fast=fast.next.next;

        }

        if(slow===head)
            return;

        
        //reversing 2nd half
        let prev=slow.next;
        let curr=prev.next;
        prev.next=null; //breaking the second list
        slow.next = null; // breaking the first list
        while(curr){
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }

        //reordering the list

        let ptr1=head;
        let ptr2=prev;

        while(ptr1&&ptr2){
            const ptr1next=ptr1.next;
            const ptr2next=ptr2.next;
            ptr1.next=ptr2;
            ptr2.next=ptr1next;
            ptr1=ptr1next;
            ptr2=ptr2next;

        }

    }
}
