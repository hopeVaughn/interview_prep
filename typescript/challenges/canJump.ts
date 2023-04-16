/*
Problem: Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

Function signature: function canJump(nums: number[]): boolean

Example:
canJump([2,3,1,1,4]) // true
canJump([3,2,1,0,4]) // false

Explanation:

In the first example, the jumps can be made as follows: 0 -> 1 -> 3 -> 4, so it is possible to reach the last index. The function returns true.
In the second example, it is not possible to reach the last index because the jump from index 3 to index 4 requires a distance of 1, but the value at index 3 is 0. The function returns false.
*/