function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length ;i++){
        for (let j = nums.length - 1 ; j > i ;j--){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    return []
}

const a = twoSum([2,7,11,15], 9)
const b = twoSum([3,2,4], 6)
const c = twoSum([3,3], 6)

console.log(a)
console.log(b)
console.log(c)