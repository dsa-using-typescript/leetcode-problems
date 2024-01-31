# 3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

Given a string, find the length (substrings are returned too) of the longest substring without repeating characters.

### Assumptions

1. String consists of English letters, digits, symbols and spaces.

## Solution 1: Nested Loops

### Approach

1. Initialize a set and start a nested loop.

2. The outer loop traverses over the string.

3. The inner loop does the following:

   3.1. Finds different substrings.

   3.2. In each substring, checks each and every element. It's stored if the element is not found in the set, else the current iteration terminates. 
   
   3.3. The current length is calculated in every iteration and compared with max stored length.

### Time Complexity - O(N^2)

The nested iterations take O(N^2) time.

### Space Complexity - O(N)

If all the characters are unique, set stores N elements.

## Solution 2: Two-pointers + Set

### Approach

1. start and end pointers maintain the starting and ending points of a substring respectively.

2. The characters are stored in the set and used to check for duplicate characters.

3. If duplicates are found, the left pointer is shifted ahead to delete the duplicate characters.

### Time Complexity - O(2\*N)

The outer loop takes O(N) time and in the worst case, the left pointer will have to move N places if all the characters are duplicate in the string.

### Space Complexity - O(N)

If all the characters are unique, set stores N elements.

## Solution 3: Two-pointers + Map

### Approach

Implement a map to store the elements and maintain the frequencies of each and every element by taking the latest index of every element.

### Time Complexity - O(N\*logN)

String traversal O(N) time while the hashmap consumes O(logN) time to find an element.

### Space Complexity - O(N)

If all the characters are unique, map stores N elements.

<hr/>
