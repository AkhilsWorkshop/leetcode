
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

const lengthOfLongestSubstring = (s) => {

    let left = 0
    let right = 0
    let newMap = new Map()
    let maxLength = 1


    // for (let right = 0; right < s.length; right++) {

    //     newMap.set()

    // }

    while (right < s.length) {

        newMap.set(s[right], i)

    }

    return maxLength

}

const s = "dvdf"

console.log(lengthOfLongestSubstring(s))