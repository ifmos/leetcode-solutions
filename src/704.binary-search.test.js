/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (44.94%)
 * Total Accepted:    37.5K
 * Total Submissions: 81.9K
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * Given a sorted (in ascending order) integer array nums of n elements and a
 * target value, write a function to search target in nums. If target exists,
 * then return its index, otherwise return -1.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 *
 *
 * Note:
 *
 *
 * You may assume that all elements in nums are unique.
 * n will be in the range [1, 10000].
 * The value of each element in nums will be in the range [-9999, 9999].
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = require('./704.binary-search')

describe('#704.Binary Search', () => {
  it('should work', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
    expect(search([5], 5)).toEqual(0)
    expect(search([-1, 0, 5], 0)).toEqual(1)
  })
})
