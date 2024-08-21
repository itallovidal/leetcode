function addBinary(a: string, b: string): string {

    function convertBinaryToNumber(c: string): number{
        let n = 0

        let j = 0
        for (let i = c.length - 1; i >= 0; i--){
            if(c[i] !== '0') {
                const result =  Math.floor(Math.pow(2, j))
                n += result
            }
            j++
        }

        return n
    }

    function convertNumberToBinary(d: number): string{
        let binary = ''
        while(d > 0){
            const rest = Math.floor(d % 2)
            d  = Math.floor(d / 2)
            if(rest === 0){
                binary+= '0'
            }else{
                binary+= '1'
            }
        }

        return binary.split('').reverse().join('')
    }


    const n1 = convertBinaryToNumber(a)
    const n2 = convertBinaryToNumber(b)
    const sum = n1+n2
    console.log(n1)
    console.log(n2)
    console.log(sum)
    console.log('----')


    if(sum === 0) return '0'


    return convertNumberToBinary(sum)
}

addBinary('1111', '1111')

