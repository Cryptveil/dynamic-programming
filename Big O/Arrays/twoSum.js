// leetcode two sum problem

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++){
        if (mySet.has(nums[i])) {
            return [nums.indexOf(target - nums[i]), i]
        }

        mySet.add(target - nums[i]);
    }
    return false;
};