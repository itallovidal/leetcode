
function romanToInt(s: string): number {
    const romanMap = {
        'I':  1,
        'V':  5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let total = 0

    // X I V
    for (let i= 0; i < s.length ;i++){
        const actual = romanMap[s[i] as keyof typeof romanMap]
        const subsequent = romanMap[s[i + 1] as keyof typeof romanMap]
        if(actual >= subsequent || subsequent === undefined ){
            console.log('adicionando->' + actual)
            total += actual
        }
        else{
            const number = subsequent - actual
            console.log(number)
            i++
            total += number
        }
    }

    return total
};

romanToInt('LIV')