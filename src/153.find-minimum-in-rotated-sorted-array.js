/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (42.43%)
 * Total Accepted:    265K
 * Total Submissions: 622.3K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 *
 *
 * Input: [3,4,5,1,2]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0
  let end = nums.length - 1
  if (nums.length === 1 || nums[end] >= nums[0]) {
    return nums[0]
  }

  let middle
  while (start < end) {
    middle = (end + start) >> 1

    if (nums[middle] < nums[middle - 1]) {
      return nums[middle]
    }

    if (nums[middle] > nums[middle + 1]) {
      return nums[middle + 1]
    }

    nums[middle] > nums[0] ? (start = middle) : (end = middle)
  }
}

module.exports = findMin
