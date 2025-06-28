

const firstTwoNumbers = [0, 1]

const fibonacci = (n) => {

    for (let i = 2; i < n; i++) {
        firstTwoNumbers[i] = firstTwoNumbers[i - 1] + firstTwoNumbers[i - 2] // [Index 2] = [Index 1] + [Index 0] => 1 // [Index 3] = [Index 2] + [Index 1] => 2 // [Index 4] = [Index 3] + [Index 2] = 3
    }

    return firstTwoNumbers

}

console.log(fibonacci(5))

// O(n)