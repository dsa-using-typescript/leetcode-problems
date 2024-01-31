import { ISinglyLinkedList } from "./listInterface.js";
import { ListNode } from "./listNode.js";

export class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  size: number = 0;

  constructor(public head: ListNode<T> | null = null) {}

  // Add a node to the end of the list
  push(value: T): string {
    const newNode = new ListNode<T>(value);
    let message = "";

    if (!this.head) {
      this.head = newNode;

      message = `The list was empty. So, ${value} is added to the head of the list.`;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;

      message = `${value} is added to the end of the list.`;
    }

    this.size++;

    return message;
  }

  // Add a node to the beginning of the list
  unshift(value: T): string {
    const newNode = new ListNode<T>(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;

    return `${value} is added to the beginning of the list.`;
  }

  // Remove a node from the end of the list
  pop(): string {
    if (!this.head) {
      return "Nothing to remove. The list is empty!";
    }

    let message: string;
    let removedNodeVal = this.head.value;

    if (this.size === 1) {
      this.head = null;

      message = `${removedNodeVal} is removed. The list is empty now.`;
    } else {
      let current = this.head;
      let prevNode = null;

      while (current.next) {
        prevNode = current;
        current = current.next;
      }

      if (prevNode) {
        removedNodeVal = current.value;
        prevNode.next = null;
      }

      message = `${removedNodeVal} is removed from the end of the list.`;
    }

    this.size--;

    return message;
  }

  // Remove a node from the beginning of the list
  shift(): string {
    if (!this.head) {
      return "Nothing to remove. The list is empty!";
    }

    let message: string;
    let removedNodeVal = this.head.value;

    if (this.size === 1) {
      this.head = null;

      message = `${removedNodeVal} is removed. The list is empty now.`;
    } else {
      this.head = this.head.next;

      message = `${removedNodeVal} is removed from the beginning of the list.`;
    }

    this.size--;

    return message;
  }

  // Search for a value
  findByValue(value: T): boolean {
    if (!this.head) {
      return false;
    }

    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // Get the value from a certain node
  valueAtPosition(position: number): T | string {
    if (!this.head) {
      return "The list is empty!";
    }

    let current = this.head;

    if (position === 0) {
      return current.value;
    }

    while (current.next) {
      position--;
      current = current.next;

      if (position === 0) {
        return current.value;
      }
    }

    return `This is a 0-indexed list. Value should be between 0 and ${
      this.size - 1
    }.`;
  }

  // Convert the linked list to an array
  toArray(): T[] {
    let arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  // Convert an array to a linked list
  toLinkedList(arr: T[]): { message: string; head: ListNode<T> | null } {
    // Dummy node
    this.head = new ListNode<T>(undefined as T);

    let current = this.head;

    for (let i = 0; i < arr.length; i++) {
      current.next = new ListNode<T>(arr[i] as T);
      current = current.next;
      this.size++;
    }

    this.head = this.head.next;

    return {
      message: "The array is converted to the linked list.",
      head: this.head,
    };
  }

  // Print the linked list as a string
  printList(): string {
    if (!this.head) {
      return "The list is empty!";
    }

    let list = "";
    let current = this.head;

    while (current.next) {
      list = list + `${current.value} -> `;
      current = current.next;
    }

    list += `${current.value} -> null`;

    return list as string;
  }

  // Reverse the list (Iterative method)
  reverseList(): string {
    let current = this.head;
    let prev = null;

    while (current) {
      let front = current.next;

      current.next = prev;
      prev = current;
      current = front;
    }

    this.head = prev;

    return "The list is reversed.";
  }

  // Get the value of the last node in the list
  get tailValue(): T | null {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current.value;
  }
}
