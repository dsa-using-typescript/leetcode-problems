import { ListNode } from "./listNode.js";

export interface ISinglyLinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  push(value: T): string; // O(N)
  unshift(value: T): string; // O(1)
  pop(value: T): string; // O(N)
  shift(): string; // O(1)
  findByValue(value: T): boolean; // O(N)
  valueAtPosition(position: number): T | string; // O(N)
  toArray(): T[]; // O(N)
  toLinkedList(arr: T[]): { message: string; head: ListNode<T> | null }; // O(N)
  printList(): string; // O(N)
  reverseList(): string; // O(N)
  get tailValue(): T | null; // O(N)
}
