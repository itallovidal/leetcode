package main

import "fmt"

func SelectionSort(nums []int) {
	// ex.: 1 3 2 5
	fmt.Printf("\nSelection Sort.")
	for i := 0; i < len(nums); i++ {
		lowestNumber := i
		for j := i + 1; j < len(nums); j++ {
			if nums[j] < nums[lowestNumber] {
				lowestNumber = j
			}
		}

		temp := nums[lowestNumber]
		nums[lowestNumber] = nums[i]
		nums[i] = temp

		fmt.Printf("\n%+v", nums)
	}

	fmt.Printf("\n✅ - %+v", nums)
}
