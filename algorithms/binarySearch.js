const arr = [1, 2, 3, 4, 5, 6]


const binarySearch = (arr, target) => {

    // (Index position)
    let left = 0 //0 
    let right = arr.length - 1 //5

    while (left <= right) { //0 <= 5 // 3 <= 5

        let mid = Math.floor((left + right) / 2) // (0 + 5)/2 => 5/2 => 2 // (3 + 5)/2 => 4

        if (target === arr[mid]) { // 5 === testing[2] (3) => false // 5 === testing[4] (5) => true
            return mid // 4
        } else if (target < arr[mid]) { // 5 < 3 => false
            right = mid - 1
        } else {
            left = mid + 1 // left = 2 + 1 => 3
        }

    }

    return -1

}

console.log(binarySearch(arr, 5))

// O(log n)