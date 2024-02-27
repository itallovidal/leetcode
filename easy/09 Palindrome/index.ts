
function isPalindrome(x: number): boolean {
    const y = x.toString()
    console.log(y)
    let reversedNumber = ''

    for(let i = y.length - 1; i >= 0; i--){
        reversedNumber += y[i]
    }
    return !!y.match(reversedNumber)
}


isPalindrome(101)

