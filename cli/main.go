package main

import (
	"fmt"
	"os"
)

func main() {
	_, err := os.ReadFile("codetour.yml")
	if err != nil {
		fmt.Println("No codetour.yml file found.")
		return
	}
}
