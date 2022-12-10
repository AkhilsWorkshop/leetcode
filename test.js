const nums = [1, 2, 3, 4, 5]

var containsDuplicate = function (nums) {
    const set = new Set([...nums]);
    return set.size != nums.length;
};


console.log(containsDuplicate(nums))