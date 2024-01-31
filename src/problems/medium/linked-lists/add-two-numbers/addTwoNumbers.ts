import { ListNode } from "src/data-structures/singly-linked-list/listNode.js";

export function addTwoNumbers(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  // Dummy node
  let sumList = new ListNode<number>(0);

  // Temporary node to store sum node-by-node
  let current = sumList;

  let sum = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }

    // Store sum as new node and move on it
    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = ~~(sum / 10);
  }

  // First node is dummy, return from the second node
  return sumList.next;
}
