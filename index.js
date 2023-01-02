

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












let cards = []//card array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRandomCard() 
{
    randNumber = Math.floor(Math.random() * 13) + 1

    if (randNumber > 10) {
        return 10
    } else if (randNumber === 1){

        return 11
    }
    else {
        return randNumber
    }
}

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards [0] = firstCard
    cards [1] = secondCard
    sum = firstCard + secondCard
    

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 

    for ( i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card"
    } 
    else if (sum === 21) {
        message= "Woohoo! You've got a blackjack"
        hasBlackJack = true
    } 
    else {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent += sum
    

}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)

    renderGame()


}

console.log(hasBlackJack)
console.log(isAlive)

















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

// let messages = [
//     "Hey, how's it going",
//     "i'm great, thank you",
//     "All been good. Been busy lately"
// ]

// let newMessage = " Same here!" 

// for (let count = 10; count < 21; count+= 1) { 
//     console.log(count)
// }

// for ( let i = 10; i < 101; i+= 10) {
//     console.log(i)
// }
// let cards = [7, 4, 9]

// for ( i = 0; i < cards.length; i++ )
//  {
//     console.log(cards [i])
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")


// for (i = 0; i < sentence.length; i++) {
//     console.log(sentence[i])
//     greetingEl.textContent += sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) 
//     {
//         return player2Time
//     } else if (player1Time > player1Time)
//     {
//         return player1Time
//     } else {
//         return player1Time
//     }
// }

// // let getFastestRace = getFastestRaceTime()

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// totRaceTime = getTotalRaceTime()

// console.log(totRaceTime)

// let randomNumber = Math.floor(Math.random() * 6) + 1

// console.log(randomNumber)

// function rollDice() {
//      randNumber = Math.floor(Math.random() * 6 + 1)
//      return randNumber
// }

// console.log(rollDice())

//LOGICAL OPERATORS

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge == false && hasHintsLeft == false)
{
    showSolution()
}

function showSolution() {
    console.log("Show the solution..............")
}