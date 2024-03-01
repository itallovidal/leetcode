function removeDuplicates(nums: number[]): number {
    const uniqueNumbers = new Map<number, number>()
    const numsLength = nums.length

    for(let i = 0;i < nums.length;i++){
        if(!uniqueNumbers.has(nums[i])){
            uniqueNumbers.set(nums[i], i)
        }
    }

    for(let i = 0; i < numsLength; i++){
        nums.pop()
    }

    console.log(nums)
    for (const uniqueNumber of uniqueNumbers.keys()) {
        nums.push(uniqueNumber)
    }
    return uniqueNumbers.size
}

removeDuplicates([1,1,2])