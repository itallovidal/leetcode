function searchInsert(nums: number[], target: number): number {
    if(target > nums[nums.length - 1]) return nums.length

    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target) return i
        if(target > nums[i] && target < nums[i + 1]) pos = i + 1
    }

    console.log(pos)
    return pos
}

console.log(searchInsert([1,3,5,6], 7))
