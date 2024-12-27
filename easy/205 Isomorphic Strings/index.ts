function isIsomorphic(s: string, t: string): boolean {

    const hashmap = new Map<string, string>()

    for (let i = 0; i < s.length; i++) {

        if(!hashmap.has(s[i])) {

            for (const [_, value] of Array.from(hashmap.entries())) {
                if(value === t[i]){
                    return false
                }
            }

            hashmap.set(s[i], t[i])
        }

        if(hashmap.get(s[i]) !== t[i]) {
            return false
        }

    }

    return true
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))

// Map(3) { 'b' => 'b',
//          'a' => 'a',
//          'd' => 'b'
//          }

