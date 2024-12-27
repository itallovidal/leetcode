// Input: s = "bcbbbcba"
//
// Output: 4
//
// Explanation:
//
//     The following substring has a length of 4
//     and contains at most two occurrences
//     of each character: "bcbbbcba" -> "bcba".



function maximumLengthSubstring(str: string): number {
    const hashTable = {}
    let max = 0
    let  l= 0, r = 0
    while(r < str.length ) {
        const letter = str[r]
        if(!hashTable[letter]) {
            hashTable[letter] = 1
        }else{
            hashTable[letter]++
        }

        while(hashTable[letter] === 3){
            hashTable[str[l]]--
            l++
        }
        const result = r - l + 1
        max =  result > max ? result : max


        r++
    }


    return max
}
console.log(maximumLengthSubstring('bcbbbcba'))