// 86. Partition List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // if (head.next === null) return head;

    let beforeHead = new ListNode();
    let before = beforeHead;
    let afterHead = new ListNode();
    let after = afterHead;
    let current = head;

    while (current !== null) {
        if (current.val < x) {
            before.next = current;
            before = before.next;
        } else {
            after.next = current;
            after = after.next;
        }
        current = current.next;
    }

    // console.log(beforeHead, before, afterHead, after, current);

    after.next = null;
    before.next = afterHead.next;
    return beforeHead.next;
   
};