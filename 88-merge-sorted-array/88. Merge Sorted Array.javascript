/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 1 2 3 0 0 0
  //     i     k
  // 2 5 6
  //     j

  let i = m - 1
  let j = n - 1
  for(let k = nums1.length -1; k >= 0; k--) {
    if(nums1[i] > nums2[j] || nums2[j] === undefined) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j-- 
    }
  }

  // return nums1

};