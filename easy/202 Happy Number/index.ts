function isHappy(n: number): boolean {
    if(n > 1 && n < 7) {
        return false
    }

    let result = n
    const history = new Map<number, number>()
    while (result !== 1){
        const num = result.toString().split('').map(Number);
        if(history.has(result)){
            return false
        }
        history.set(result, 1)
        result = num.reduce((previousValue, currentValue)=> Math.pow(currentValue, 2) + previousValue , 0)
    }


    return true
}


console.log(isHappy(19)) // 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100
console.log(isHappy(31)) // 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100
console.log(isHappy(44)) // 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100
console.log(isHappy(68)) // 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100
console.log(isHappy(11)) // 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100