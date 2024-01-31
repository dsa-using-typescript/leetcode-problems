import { SinglyLinkedList } from "src/data-structures/singly-linked-list/singlyLinkedList.js";
import { addTwoNumbers } from "./addTwoNumbers.js";

interface TestCaseType {
  desc: string;
  list1: number[];
  list2: number[];
}

const testCases: TestCaseType[] = [
  {
    desc: "Lists are empty",
    list1: [],
    list2: [],
  },
  {
    desc: "Two lists are of equal sizes",
    list1: [2, 4, 3],
    list2: [5, 6, 4],
  },
  {
    desc: "All elements are 9",
    list1: [9, 9, 9, 9, 9, 9, 9],
    list2: [9, 9, 9, 9],
  },
  {
    desc: "Two lists are of unequal sizes",
    list1: [2, 4, 9],
    list2: [5, 6, 4, 9],
  },
];

(() => {
  console.log("------------------------------------------------------");

  for (const { desc, list1, list2 } of testCases) {
    const sll = new SinglyLinkedList<number>();
    const head1 = sll.toLinkedList(list1).head;
    const head2 = sll.toLinkedList(list2).head;

    const output = new SinglyLinkedList<number>(
      addTwoNumbers(head1, head2)
    ).toArray();

    console.log(
      `Description: ${desc} 
        \nList1: [${list1}] 
        \nList2: [${list2}] 
        \nOutput: [${output}]
        \n------------------------------------------------------`
    );
  }
})();
