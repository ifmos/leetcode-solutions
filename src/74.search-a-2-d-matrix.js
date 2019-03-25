/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (34.70%)
 * Total Accepted:    211.5K
 * Total Submissions: 609.4K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 *
 *
 * Example 1:
 *
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 *
 *
 * Example 2:
 *
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 *
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  let start = 0;
  let end = matrix.length - 1;
  let innerLength = matrix[end].length;
  let middle;
  let current;
  let result = false;
  while (start <= end) {
    middle = ~~((start + end) / 2);
    if (current) {
      start = 0;
      end = innerLength - 1;
      while (start <= end) {
        middle = ~~((start + end) / 2);
        if (
          current[middle] === target ||
          current[start] === target ||
          current[end] === target
        ) {
          result = true;
          break;
        } else if (current[middle] > target) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
      }
      break;
    } else if (
      matrix[start][0] <= target &&
      matrix[start][innerLength - 1] >= target
    ) {
      current = matrix[start];
    } else if (
      matrix[middle][0] <= target &&
      matrix[middle][innerLength - 1] >= target
    ) {
      current = matrix[middle];
    } else if (
      matrix[end][0] <= target &&
      matrix[end][innerLength - 1] >= target
    ) {
      current = matrix[end];
    } else if (matrix[middle][0] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return result;
};

module.exports = searchMatrix;
