function plusOne(digits: number[]): number[] {
    if(digits.length === 1 && digits[0] === 9) return [1,0]
    if(digits[digits.length - 1] != 9){
        const last = digits[digits.length - 1]
        digits[digits.length - 1] = last + 1
        return digits
    }


    const numberOfElements = digits.length
    let i = digits.length - 1
    let lastDigit = -1
    while (i >= 0){
        if(digits[i] === 9) {
            digits.pop()
            i--
            if(digits.length === 0) lastDigit = 9
            continue
        }
        if(digits[i] !== 9) {
            lastDigit = digits[i]
            digits.pop()
            break
        }
        i--
    }

    const sum = lastDigit + 1
    digits.push( sum > 9 ? 1 : sum )

    for (let i = digits.length; i < numberOfElements; i++) {
        digits.push(0)
    }

    if(lastDigit === 9) {
        console.log('9 porra')
        digits.push(0)
    }

    return digits
}

console.log(plusOne([9,9]))
