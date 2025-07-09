
const stock = (nums) => {

    let left = 0
    let right = 1
    let profit = 0
    let current

    while (right < nums.length) {

        if (nums[left] > nums[right]) {
            left = right
        }

        current = nums[right] - nums[left]

        if (current > profit) {
            profit = current
        }

        right++

    }

    return profit

}

const prices = [7, 6, 4, 3, 1]

console.log(stock(prices))