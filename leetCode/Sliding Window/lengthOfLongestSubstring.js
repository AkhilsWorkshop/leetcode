

var lengthOfLongestSubstring = (s) => {

    let left = 0
    let right = 0
    let maxLength = 0

    let newSet = new Set()

    while (left < s.length) {

        if (newSet.has(s[right])) {

            let currentArrayLength = Array.from(newSet).join('').length || 0

            if (currentArrayLength > maxLength) {
                maxLength = currentArrayLength
            }

            left++
            right = left
            newSet.clear()

        } else {

            newSet.add(s[right])
            right++
        }

    }

    return maxLength

}

const s = "pwwkew"

console.log(lengthOfLongestSubstring(s))