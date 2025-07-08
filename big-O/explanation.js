// Big O describes how the runtime or space grows as the size of the input (n) increases. It helps measure the efficiency of algorithms.

// Common Big O notations:

// O(1) - Constant time: The algorithm takes the same amount of time regardless of input size. 
// (e.g., accessing an element in an array by index)

const getFirstElement = (arr) => arr[0]

// O(log n) - Logarithmic time: The algorithm's time grows logarithmically as the input size increases. 
// (e.g., binary search)

const binarySearch = (arr, target) => {

    let left = 0, right = arr.length - 1

    while (left <= right) {

        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) return mid
        else if (arr[mid] < target) left = mid + 1
        else right = mid - 1
    }

    return -1
}

// O(sqrt(n)) - Square root time: The algorithm's time grows with the square root of the input size. 
// (e.g., finding a prime number up to n)

const isPrime = (n) => {

    if (n <= 1) return false
    if (n <= 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }

    return true
}

// O(n) - Linear time: The algorithm's time grows linearly with the input size. 
// (e.g., finding an element in an unsorted array)

const findElement = (arr, target) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }

    return -1
}

// O(n log n) - Linearithmic time: The algorithm's time grows in proportion to n times the logarithm of n. 
// (e.g., merge sort, quicksort)


// O(n^2) - Quadratic time: The algorithm's time grows quadratically with the input size. 
// (e.g., bubble sort)


// O(n^3) - Cubic time: The algorithm's time grows cubically with the input size. 
// (e.g., matrix multiplication)


// O(2^n) - Exponential time: The algorithm's time doubles with each additional element in the input. 
// (e.g., recursive Fibonacci)


// O(n!) - Factorial time: The algorithm's time grows factorially with the input size. 
// (e.g., generating all permutations of a set)