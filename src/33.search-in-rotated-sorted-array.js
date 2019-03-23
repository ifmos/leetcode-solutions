/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.62%)
 * Total Accepted:    382K
 * Total Submissions: 1.2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = ~~((left + right) / 2);
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (nums[middle] === target) {
      return middle;
    }
    // 循环二分搜索
    if (nums[left] > nums[right]) {
      // middle 在右半区
      if (nums[middle] < nums[left]) {
        if (target > nums[middle] && target < nums[left]) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      } else {
        if (target < nums[middle] && target > nums[right]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      // 常规二分搜索
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

module.exports = search;
