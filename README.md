# JUMP GAME

A simple script that count the number of jump to get out of an array.



Given an array of integers, you are initially positioned at the first index of the array.
Each element in the array represents your jump length from that position.
Your goal is to find a number of jumps that is necessary to do in order to leave an array.

-------

Example:
`Given array A = [2,3,1,4,1]`
 
The count of jumps to leave an array will be 3.
 
`start position: 0, A[0] == 2`
`1 jump: 0 + 2 -> position 2, A[2] == 1`
`2 jump: 2 + 1 -> position 3, A[3] == 4`
`3 jump: 3 + 4 -> jump out of array`
 
If it is not possible to leave an array, return -1.
 