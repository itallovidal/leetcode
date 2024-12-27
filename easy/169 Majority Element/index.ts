function majorityElement(nums: number[]): number {
    const hashmap = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        if(!hashmap.has(nums[i])){
            hashmap.set(nums[i], 1)
            continue
        }

        const occurrence = hashmap.get(nums[i])!
        hashmap.set(nums[i], occurrence + 1)
    }

    let el = [0,0]

    hashmap.forEach((value, key) => {

        if(value > el[0]) {
            el[1] = key
            el[0] = value
        }
    })

    return el[1]
}


// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
// console.log(majorityElement([2,2,1,1,1,2,2]))
console.log('---___')
console.log(majorityElement([3,2,3]))
