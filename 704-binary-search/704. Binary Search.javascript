/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let l = 0
  let r = nums.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = nums[m]

    if(mid === target) {
      return m
    }
    if(mid < target) {
      l = m + 1
    }
    if(mid > target) {
      r = m - 1
    }
  }
  return -1
};