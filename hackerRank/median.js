arr = [0, 1, 2, 3, 4, 5, 6, 7]
const sortArray = arr.sort((a, b) => a - b)
const center = Math.floor(sortArray.length / 2)
if (arr.length % 2 != 0)
    console.log(arr[center])
else
    console.log(Math.round((arr[center + 1] + arr[center]) / 2))
