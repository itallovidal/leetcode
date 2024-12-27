function containsDuplicate(nums: number[]): boolean {
    const hashmap = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        if(!hashmap.has(nums[i])){
            hashmap.set(nums[i], 1)
            continue
        }

        return true
    }

    return false
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))