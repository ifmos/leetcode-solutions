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
var findMin = require("./153.find-minimum-in-rotated-sorted-array");

describe("#153.Find Minimum In Rotated Sorted Array", () => {
  it("should work", () => {
    expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
    expect(findMin([1, 2, 3])).toEqual(1);
    expect(findMin([3, 4, 5, 6, 1, 2])).toEqual(1);
    expect(findMin([2, 1])).toEqual(1);
  });
});
