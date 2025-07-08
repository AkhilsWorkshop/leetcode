
// https://leetcode.com/problems/two-sum/description/

const twoSum = (nums, target) => {

    const newMap = new Map()

    for (let i = 0; i < nums.length; i++) {

        let find = target - nums[i]

        if (newMap.has(find)) {

            return [newMap.get(find), i]

        } else {

            newMap.set(nums[i], i)
        }

    }

}

const nums = [2, 5, 5, 11]
const target = 10

console.log(twoSum(nums, target))