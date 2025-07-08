

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {

    let left = 0
    let right = 1
    let profit = 0

    while (right < prices.length) {

        if (prices[left] > prices[right]) {

            left = right

        } else {

            if ((prices[right] - prices[left]) > profit) {
                profit = prices[right] - prices[left]
            }

        }

        right++

    }

    return profit

}

const arr = [7, 6, 4, 3, 1]

console.log(maxProfit(arr))

