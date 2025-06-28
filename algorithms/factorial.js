

const factorial = (n) => {

    let m = 1

    for (let i = n; i > 1; i--) {
        m = m * i // m = 1 * 5 => 5 // m = 5 * 4 => 20 // m = 20 * 3 => 60 // m = 60 * 2 => 120 // 
    }

    return m

}

console.log(factorial(5))

// O(n)