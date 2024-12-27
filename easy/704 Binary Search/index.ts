function search(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1
    let middle = 0


    while (r >= l) {
        middle = Math.ceil((l + r) / 2)
        if(nums[middle] == target) {
            return middle
        }

        if(middle === r && r === l){
            break
        }

        if(nums[middle] < target){
            l = middle + 1
            continue
        }

        r = middle - 1
    }

    return -1
}

// console.log(search([-1,0,3,5,9,12], 9))
// console.log(search([-1,0,3,5,9,12], 2))
// console.log(search([2,5], 2))
console.log(search([5], 5))
console.log(search([2,5], 5))
