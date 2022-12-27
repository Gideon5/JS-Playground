

//  let countEl = document.getElementById("count")
//  let saveEl = document.getElementById("save-el")
//  let count = 0


//  function increment() {

//      count += 1
//     countEl.textContent = count;
   
//  }

// function save() {
//         let saveCount = count + " - "
//         saveEl.textContent += saveCount
//         countEl.textContent = 0
//         count = 0

//         console.log(count)
           
// }

// // let username = "Amos"
// // let message = ' You have three new notifs'

// // name = "Alex"
// // greeting = "Hi , ton nom est "
// // myGreeting = greeting + name
// // console.log(myGreeting)

// // welcomeEl = document.getElementById("welcome");

// // let fName = "Animop"
// // let greeting = "Welcome back "

// // welcomeEl.innerText = greeting + fName
// // welcomeEl.innerText = welcomeEl.innerText + " emoji"


// let firstName = "Emmanuel "
// let lastName = "Dollar"
// let fullname = firstName + lastName

// console.log(fullname)
// let fname = ' Mainus'
// let greeting = 'Hi there'

// function hello() {
//     console.log(greeting + fname )
// }

// hello()

// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints);
// let errorText = document.getElementById("error")
 

// function purchaseError() {
//     errorText.innerText = "Something went wrong, please try again"
// }

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let result = document.getElementById("sum-el")

// function add() {
//      result.textContent += num1 + num2

// }

// function subtract() {
//     result.textContent += num1 - num2
// }

// function divide() {
//     result.textContent += num1 / num2
// }

// function multiply() {
//     result.textContent += num1 * num2
// }

// let firstCard = 11
// let secondCard = 10

// let sum = firstCard + secondCard

// console.log(sum)


// if (sum < 21) {
//     console.log("Do you want to draw a new card")
// } else if (sum === 21) {
//     console.log("You've gotten blackjack congratulation")
// } else  (sum > 21) {
//     console.log("You're out of the game")

// }

//  let age = 22

//  if (age < 21 ) {
//     console.log("You cannot enter the club please leave")

//  } else {
//     console.log("Welcome")
//  }

// let age = 100

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king")

// }
// else {
//     console.log("Not elgible, you have already gotten one")
// }
// let firstCard = 4
// let secondCard = 11
// let cards = [firstCard, secondCard]//card array

// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// // let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     if (sum <= 20) {
//         message = "Do you want to draw a new card"
//     } 
//     else if (sum === 21) {
//         message= "Woohoo! You've got a blackjack"
//         hasBlackJack = true
//     } 
//     else {
//         message = "You're out of the game"
//         isAlive = false
//     }

//     messageEl.textContent = message
//     cardsEl.textContent = "Cards: " +  firstCard + " " + secondCard
//     sumEl.textContent += sum
//     console.log(firstCard)
    

// }

// function newCard() {
//     console.log("Drawing a new card from the deck")
//     let card = 3
//     sum += card

//     renderGame()


// }

// console.log(hasBlackJack)
// console.log(isAlive)

// let featuredPosts = [
//     "Check out my Netflix", 
//     "Here's code for my projects",
//     "My portfolio link"
// ]

// let bio = [
//     "5 years experience with React, Laravel and Python",
//     "Senior High School Graduate",
//     "Certified Alx Programmer",
//     "Javascript, , PHP"
// ]
// console.log(bio.length)
// .log(bio [0])
// 5454
 
// let myself = ["My name is gideon", "I am 23 years old", true ]
// console.log(myself[2])

// myself.push("abeiku")

let messages = [
    "Hey, how's it going",
    "i'm great, thank you",
    "All been good. Been busy lately"
]

let newMessage = " Same here!"

messages.push(newMessage)

console.log(messages)