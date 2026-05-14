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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {

        // let curr=head;
        // let len=0;
        // while(curr){
        //     len++;
        //     curr=curr.next;
        // }

        // curr=head;
        // let nodeToUpdate=len-n;
        // if(nodeToUpdate===0)
        // {
        //     head=head.next;
        //     return head;

        // }
        // let currLen=0
        //   while(curr){
        //     currLen++;
        //     if(currLen===nodeToUpdate){
        //         curr.next=curr.next.next
        //         return head;

        //     }
        //     curr=curr.next;
        // }
        // return head;


        let dummy=new ListNode();
        dummy.next=head;
        let slow=dummy;
        let fast=dummy;

        for(let i=0;i<=n;i++)
            fast=fast.next;

        while(fast){
            slow=slow.next;
            fast=fast.next;
        }

        slow.next=slow.next.next;
        return dummy.next;
        
    }
}
