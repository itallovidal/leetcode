function isAnagram(s: string, t: string): boolean {
    const hashmap1 = new Map<string, number>()
    const hashmap2 = new Map<string, number>()

    if(s.length !== t.length) return false

    for (let i = 0; i < s.length; i++) {

        if(!hashmap1.has(s[i])) {
            hashmap1.set(s[i], 1)
        }else{
            hashmap1.set(s[i], hashmap1.get(s[i])! + 1)
        }

        if(!hashmap2.has(t[i])) {
            hashmap2.set(t[i], 1)
        }else{
            hashmap2.set(t[i], hashmap2.get(t[i])! + 1)
        }
    }

    for (const [key01, value01] of Array.from(hashmap1.entries())) {
        if(!hashmap2.has(key01)) {
            return false
        }

        const value02 = hashmap2.get(key01)!

        if(value02 !== value01) return false
    }



    return true
}


console.log(isAnagram('anagram', 'nagaram')) // true
// console.log(isAnagram('rat', 'car')) // false
// console.log(isAnagram('a', 'ab')) // false
console.log(isAnagram('aacc', 'ccac')) // false