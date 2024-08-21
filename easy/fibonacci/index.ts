
let nums: string = ''
function fibonacci(anterior: number, atual:number, max: number){
    if(atual > max){
        return
    }
    nums += " " + atual.toString()
    return fibonacci(atual, atual + anterior, max)
}

fibonacci(1, 1, 1000)
console.log(nums)
