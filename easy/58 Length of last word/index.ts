function lengthOfLastWord(s: string): number {
    if(s.length === 1) return 1
    let wordCount = 0
    for (let i = s.length - 1; i >= 0  ; i--) {
        console.log(s[i])
        if(s[i] === ' ' && wordCount > 0) return wordCount
        if(s[i] !== ' ') {
            wordCount += 1
        }
    }

    return wordCount

}

lengthOfLastWord('a ')