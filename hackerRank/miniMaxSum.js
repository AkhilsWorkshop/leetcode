arr = [1, 3, 5, 7, 9]

const sortedArray = arr.sort();

const low = sortedArray.slice(0, sortedArray.length - 1)
const high = sortedArray.slice(1, sortedArray.length)
let lowSum = low.reduce((a, b) => a + b)
let highSum = high.reduce((a, b) => a + b)

console.log(lowSum, highSum)

// let min_sum = 0

// let max_sum = 0

// for (let i = 0; i < arr.length; i++) {
//     if (i < arr.length - 1) {
//         min_sum += arr[i]
//     }
//     if (i > 0) {
//         max_sum += arr[i]
//     }
// }

// console.log(min_sum, max_sum)