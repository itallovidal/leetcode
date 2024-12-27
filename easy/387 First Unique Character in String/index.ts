function firstUniqChar(s: string): number {
    const hashmap = new Map<string, number | undefined>();

    for (let i = 0; i < s.length; i++) {
        if(hashmap.has(s[i])) {
            hashmap.set(s[i], undefined)
            continue
        }

        hashmap.set(s[i], i)
    }

    const el = Array.from(hashmap.values()).find(v => v != undefined)

    if(el !== undefined) return el

    return -1
}

// function firstUniqChar(s: string): number {
//     const hashmap = new Map<string, number[]>();
//
//     for (let i = 0; i < s.length; i++) {
//         if(hashmap.has(s[i])) {
//             const [occurrences, index] = hashmap.get(s[i])!;
//             hashmap.set(s[i], [occurrences + 1,  index]);
//             continue
//         }
//
//         hashmap.set(s[i], [1, i])
//     }
//
//     console.log(hashmap)
//
//     const arr = Array.from(hashmap.values()).find( item => item[0] === 1)
//
//     if(arr != undefined) return arr[1]
//
//     return -1
// }

console.log(firstUniqChar('leetcode'))