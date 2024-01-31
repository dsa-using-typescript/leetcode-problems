# 2. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)

The heads of two linked lists representing positive integers are given.

Add the two numbers and return the sum as a linked list.

The digits are in reverse order.

### Constraints

1. Number of nodes in each linked list is in the range [1, 100].

2. Each node contains a single digit.

3. The list represents a number that does not have any trailing zeroes.

## Solution: Mathematical simulation

### Intuition

As the number is reversed, the head of the linked list represents the least significant digit.

simulate digits-by-digits sum starting from the head of the list and keep track of the carry-over value (sum / 10).

### Approach

1. Create a dummy node. This will be the head of the solution list.

2. Create a node current, initialize it with dummy.

3. Run a loop until one of the following is true - both the lists contain nodes and sum > 0.

4. Calculate sum and traverse both the lists simultaneously.

5. Store sum % 10 as the current node of the solution list.

6. Store sum / 10 in sum. This acts as the carry-over value for the next iteration.

7. Return the second node as the head of the solution list. The first node (dummy) does not contribute to the solution.

### Time Complexity - O(max(M,N))

M and N are the lengths of l1 and l2 respectively.

### Space Complexity - O(max(M,N))

The length of the new list is at most max(M,N)+1

<hr/>