function longestCommonPrefix(strs: string[]): string {
    const littleStr = strs.sort((a, b)=> a.length - b.length )
    let prefix = ''

    if(littleStr.length === 1){
        return littleStr[0]
    }

    let breakTudo = false
    for(let i = 0; i < littleStr[0].length; i++ ){
        for(let j = 1; j < strs.length; j++){
            console.log('verificando:'+ littleStr[0][i] )
            console.log('letra atual:'+ strs[j][i] )
            if(strs[j][i] !== littleStr[0][i]){
                breakTudo = true
                break
            }

            if(strs[j][i] === littleStr[0][i] &&  j === strs.length - 1){
                prefix+=littleStr[0][i]
            }
        }

        if(breakTudo) break
    }

    return prefix
};