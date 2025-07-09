
// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false
    }

    const newMap = new Map()

    for (let i = 0; i < s.length; i++) {

        newMap.set(s[i], (newMap.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {

        if (!newMap.has(t[i]) || (newMap.get(t[i]) === 0))
            return false

        newMap.set(t[i], newMap.get(t[i]) - 1)
    }

    return true

}

const validAnagram = (s, t) => {

    if (s.length !== t.length) {
        return false
    }

    let newMap = new Map()

    for (let i = 0; i < s.length; i++) {

        newMap.set(s[i], newMap.has(s[i]) ? (newMap.get(s[i]) + 1) : 1)

    }

    for (let i = 0; i < t.length; i++) {

        if (newMap.has(t[i])) {

            if (newMap.get(t[i]) > 1) {

                newMap.set(t[i], (newMap.get(t[i]) - 1))
            } else {

                newMap.delete(t[i])
            }

        }

    }

    return newMap.size === 0 ? true : false

}

const s = "aacc"
const t = "aaca"

console.log(isAnagram(s, t))