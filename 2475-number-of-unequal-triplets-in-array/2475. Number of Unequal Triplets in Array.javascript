/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {

  let out = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      for(let k = j+1; k < nums.length; k++) {
        if(nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
          out++
        }
      }
    }
  }
  return out
};