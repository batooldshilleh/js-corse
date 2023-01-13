let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

let num = hands.length

let randNum = Math.floor(Math.random()* num) 

console.log(hands[randNum])