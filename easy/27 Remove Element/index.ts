function removeElement(nums: number[], val: number): number {
    const numsLength = nums.length

    const numbersLeft = nums.filter((n)=>{
        return n !== val
    })

    console.log('->')
    console.log(numbersLeft)

    for(let i = 0; i < numsLength; i++){
        nums.pop()
    }

    for (const n of numbersLeft) {
        nums.push(n)
    }
    console.log(nums)
    return numbersLeft.length
}

removeElement([0,1,2,2,3,0,4,2], 2)

// [0,1,,3,0,4,] -> [0,1,4,0,3]