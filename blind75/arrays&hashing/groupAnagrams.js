
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {

    let newMap = new Map()
    let key

    for (const str of strs) {

        key = str.split('').sort().join('')

        if (newMap.has(key)) {

            newMap.get(key).push(str)
        } else {

            newMap.set(key, [str])
        }

    }

    return Array.from(newMap.values())

}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(strs))