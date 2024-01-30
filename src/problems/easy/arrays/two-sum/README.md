# 1. [Two Sum](https://leetcode.com/problems/two-sum/description/)

Return the indices of the two numbers that add up to target

### Assumptions

1. Each input have exactly one solution

2. Same element should not be used twice

3. Answer can be returned in any order

### Constraints

1. Array cannot be modified

## Solution: Hashing

### Intuition

In the naive approach, we selected one element using an outer loop, and then searched for the other one using an inner loop

Thus, we used a hashmap instead to check if the other element, i.e. target - selected element exists

This helps us to trim the time complexity of the problem

### Approach

1. Select an element using a loop

2. Calculate the other addend (target - element)

3. If the calculated value exists in the hashmap, return the indices of the selected element and the value found in the map

4. Else just store the current element along with its index in the map and iterate

5. The end of the loop means the values are not found

### Time Complexity - O(N\*logN)

The iteration takes O(N) time while the hashmap consumes O(logN) time to find an element

### Space Complexity - O(N)

At the worst case, all the elements are stored along with their indices

<hr/>

## Extra Solution: Two-pointers (violates the constraint)

### Intuition

We sort the array and try to choose the numbers greedily

A left pointer is placed at the first index while the right pointer is placed at the last index

We gradually shift the two pointers by comparing the sum of the values they are pointing to and the given target

### Approach

1. Sort the array

2. left -> first index, right -> last index

3. Calculate nums[left] + nums[right] -> sum

   3.1. If sum > target -> right - 1
   3.2. Else if sum < target -> left + 1
   3.3. Else return the result

4. If the loop ends, the numbers do not exist

### Time Complexity - O(N\*logN) + O(N)

Sorting takes O(N\*logN) time and the loop consumes O(N) time in the worst case

### Space Complexity - O(1)

<hr/>
