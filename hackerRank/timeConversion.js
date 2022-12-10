const s = "12:05:45PM"

const slice1 = s.slice(8, 10)
const slice2 = s.slice(0, 2)

if ((slice1 === "PM" && slice2 != "12")) {
    const first = s.slice(0, 2)
    const second = s.slice(2, 8)
    console.log(`${parseInt(first) + 12}${second}`)
    return `${parseInt(first) + 12}${second}`
}
else if (slice1 === "AM" && slice2 === "12") {
    const second = s.slice(2, 8)
    console.log(`00${second}`)
    return `00${second}`
}
else {
    const converting = s.slice(0, 8)
    console.log(converting)
    return converting
}

