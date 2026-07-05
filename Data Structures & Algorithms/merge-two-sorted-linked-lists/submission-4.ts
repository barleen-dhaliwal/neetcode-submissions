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


        let one;
        let two;
        let curr;
        let head;
        if(list1.val<list2.val){
            curr=list1;
            head=list1;
            one=curr.next;
            two=list2
        }else{
            curr=list2;
            head=list2;
            two=curr.next;
            one=list1;
        }

        while(one && two){
            
            if(one.val<two.val){
                curr.next=one
                one=one.next
            }else{
                curr.next=two;
                two=two.next;
            }
            curr=curr.next;

        }
        if(!one)
            curr.next=two;
        if(!two)
            curr.next=one;
        return head;

       
    }
}
