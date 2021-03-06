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
var search = require('./33.search-in-rotated-sorted-array')
describe('#33.Search in rotated sorted array', () => {
  it('should work', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4)
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1)
    expect(search([1, 3], 3)).toEqual(1)
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toEqual(1)
  })
})
