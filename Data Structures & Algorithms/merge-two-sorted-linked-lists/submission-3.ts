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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {

        if (!list1) return list2;
        if (!list2) return list1;
        let ptr1=list1;
        let ptr2=list2;
        
        let dummy=new ListNode();
        let prev = dummy;
        while(ptr1&&ptr2){
            if(ptr1.val<ptr2.val){
                prev.next=ptr1;
                ptr1=ptr1.next
            }else{
                prev.next=ptr2;
                ptr2=ptr2.next
            }
            prev=prev.next
        }

        if(ptr1)
            prev.next=ptr1;
        else
            prev.next=ptr2;

        return dummy.next;
        
    }
}
