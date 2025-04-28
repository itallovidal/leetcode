package main

import "fmt"

func BubbleSort(nums []int) {
	fmt.Printf("\nBubble Sort.")

	for i := 0; i < len(nums)-1; i++ {
		for j := 0; j < len(nums)-1-i; j++ {
			if nums[j] > nums[j+1] {
				temp := nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = temp
			}
		}

		fmt.Printf("\n%+v", nums)
	}
	fmt.Printf("\n✅ - %+v", nums)
}
