
// https://leetcode.com/problems/contains-duplicate/description/

const containsDuplicate = (nums) => {

    let newMap = new Map()

    for (let i = 0; i < nums.length; i++) {

        if (newMap.has(nums[i])) {
            return true
        } else {
            newMap.set(nums[i], 1)
        }

    }

    return false

}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.log(containsDuplicate(nums))