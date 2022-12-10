const nums = [1, 2, 3, 4, 5]

// var containsDuplicate = function (nums) {
//     const hashTable = new Map();

//     for (i = 0; i < nums.length; i++) {
//         if (hashTable.has(nums[i])) return true;
//         else hashTable.set(nums[i], true)
//     }
//     return false
// };

var containsDuplicate = function (nums) {
    const set = new Set([...nums]);
    return set.size != nums.length;
};


console.log(containsDuplicate(nums))