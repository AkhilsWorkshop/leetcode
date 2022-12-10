const arr = [1, 2, 3, -1, -2, -3, 0, 0]

const positive = arr.filter((e) => e > 0)
const negative = arr.filter((e) => e < 0)
const zero = arr.filter((e) => e === 0)
console.log((positive.length / arr.length).toFixed(6))
console.log((negative.length / arr.length).toFixed(6))
console.log((zero.length / arr.length).toFixed(6))

let pos = 0, neg = 0, zer = 0;
const cal = arr.map((e, k) => {
    if (e > 0)
        pos++;
    else if (e < 0)
        neg++;
    else
        zer++;
})
console.log((pos / arr.length).toFixed(6))
console.log((neg / arr.length).toFixed(6))
console.log((zer / arr.length).toFixed(6))