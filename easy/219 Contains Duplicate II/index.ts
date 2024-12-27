function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hashmap = new Map<number, number>();
    let l = 0, r = 0

    while (r < nums.length) {
        if(!hashmap.has(nums[r])) {
            hashmap.set(nums[r], r);
            r++
        }else{
            const  leftPos = hashmap.get(nums[r]) as number
            // console.log(leftPos)
            if( (r - leftPos) <= k){
                return true
            }
            else{
                hashmap.set(nums[r], r );
                l = r
                r++
            }
        }

        // console.log(hashmap)
    }


    return false
}

console.log(containsNearbyDuplicate([1,2,3,1], 3)) // true
// console.log('---------')
console.log(containsNearbyDuplicate([1,0,1,1], 1)) // true
// console.log('---------')
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)) // false
// console.log('---------')
console.log(containsNearbyDuplicate([1,4,2,3,1,2], 3)) // true




