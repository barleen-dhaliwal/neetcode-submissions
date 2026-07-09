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


        let len=0;
        let curr=head;
        while(curr){
            len++;
            curr=curr.next;
        }

        if(n===len)
        return head.next;

        curr=head;
        let i=0;
        while(curr){
            if(i===len-n-1){
                curr.next=curr.next.next;
                return head;
            }
            i++;
            curr=curr.next  

        }




        // let dummy=new ListNode();
        // dummy.next=head;
        // let slow=dummy;
        // let fast=dummy;

        // for(let i=0;i<=n;i++)
        //     fast=fast.next;

        // while(fast){
        //     slow=slow.next;
        //     fast=fast.next;
        // }

        // slow.next=slow.next.next;
        // return dummy.next;
        
    }
}
