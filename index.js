

// //  let countEl = document.getElementById("count")
// //  let saveEl = document.getElementById("save-el")
// //  let count = 0


// //  function increment() {

// //      count += 1
// //     countEl.textContent = count;
   
// //  }

// function save() {
//         let saveCount = count + " - "
//         saveEl.textContent += saveCount
//         countEl.textContent = 0
//         count = 0


// //         console.log(count)
           
// // }

// // // let username = "Amos"
// // // let message = ' You have three new notifs'


// // // name = "Alex"
// // // greeting = "Hi , ton nom est "
// // // myGreeting = greeting + name
// // // console.log(myGreeting)

// // // welcomeEl = document.getElementById("welcome");

// // // let fName = "Animop"
// // // let greeting = "Welcome back "

// // // welcomeEl.innerText = greeting + fName
// // // welcomeEl.innerText = welcomeEl.innerText + " emoji"


// // let firstName = "Emmanuel "
// // let lastName = "Dollar"
// // let fullname = firstName + lastName

// // console.log(fullname)
// // let fname = ' Mainus'
// // let greeting = 'Hi there'

// // function hello() {
// //     console.log(greeting + fname )
// // }

// // hello()

// // let myPoints = 3

// // function add3Points() {
// //     myPoints += 3
// // }

// // function remove1Point() {
// //     myPoints -= 1
// // }

// // add3Points()
// // add3Points()
// // add3Points()
// // remove1Point()
// // remove1Point()

// // console.log(myPoints);
// // let errorText = document.getElementById("error")
 

// // function purchaseError() {
// //     errorText.innerText = "Something went wrong, please try again"
// // }

// // let num1 = 8
// // let num2 = 2
// // document.getElementById("num1-el").textContent = num1
// // document.getElementById("num2-el").textContent = num2
// // let result = document.getElementById("sum-el")

// // function add() {
// //      result.textContent += num1 + num2

// // }

// // function subtract() {
// //     result.textContent += num1 - num2
// // }

// // function divide() {
// //     result.textContent += num1 / num2
// // }

// // function multiply() {
// //     result.textContent += num1 * num2
// // }

// // let firstCard = 11
// // let secondCard = 10

// // let sum = firstCard + secondCard

// // console.log(sum)


// // if (sum < 21) {
// //     console.log("Do you want to draw a new card")
// // } else if (sum === 21) {
// //     console.log("You've gotten blackjack congratulation")
// // } else  (sum > 21) {
// //     console.log("You're out of the game")

// // }

// //  let age = 22

// //  if (age < 21 ) {
// //     console.log("You cannot enter the club please leave")

// //  } else {
// //     console.log("Welcome")
// //  }

// // let age = 100

// // if (age < 100) {
// //     console.log("Not eligible")
// // } else if (age === 100) {
// //     console.log("Here is your birthday card from the king")

// // }
// // else {
// //     console.log("Not elgible, you have already gotten one")
// // }












// let cards = []//card array
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// // let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")


// let player = {
//     name: "Alex",
//     chips: 124
// }
// console.log(player)

// let playerEl = document.querySelector("#player-el")
// playerEl.textContent = player.name + ' ' + " : $" + player.chips

// function getRandomCard() 
// {
//     randNumber = Math.floor(Math.random() * 13) + 1

//     if (randNumber > 10) {
//         return 10
//     } else if (randNumber === 1){

//         return 11
//     }
//     else {
//         return randNumber
//     }
// }

// function startGame() {

//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards [0] = firstCard
//     cards [1] = secondCard
//     sum = firstCard + secondCard
    

//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " 

//     for ( i = 0; i < cards.length; i++)
//     {
//         cardsEl.textContent += cards[i] + " "
//     }

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
//     sumEl.textContent += sum
    

// }

// function newCard() {

//     if ( isAlive === true && hasBlackJack === false ){
    
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     console.log(cards)

//     renderGame()
//     }

// }

// console.log(hasBlackJack)
// console.log(isAlive)

















// // let featuredPosts = [
// //     "Check out my Netflix", 
// //     "Here's code for my projects",
// //     "My portfolio link"
// // ]

// // let bio = [
// //     "5 years experience with React, Laravel and Python",
// //     "Senior High School Graduate",
// //     "Certified Alx Programmer",
// //     "Javascript, , PHP"
// // ]
// // console.log(bio.length)
// // .log(bio [0])
// // 5454
 
// // let myself = ["My name is gideon", "I am 23 years old", true ]
// // console.log(myself[2])

// // myself.push("abeiku")

// // let messages = [
// //     "Hey, how's it going",
// //     "i'm great, thank you",
// //     "All been good. Been busy lately"
// // ]

// // let newMessage = " Same here!" 

// // for (let count = 10; count < 21; count+= 1) { 
// //     console.log(count)
// // }

// // for ( let i = 10; i < 101; i+= 10) {
// //     console.log(i)
// // }
// // let cards = [7, 4, 9]

// // for ( i = 0; i < cards.length; i++ )
// //  {
// //     console.log(cards [i])
// // }

// // let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// // let greetingEl = document.getElementById("greeting-el")


// // for (i = 0; i < sentence.length; i++) {
// //     console.log(sentence[i])
// //     greetingEl.textContent += sentence[i] + " "
// // }

// // let player1Time = 102
// // let player2Time = 107

// // function getFastestRaceTime() {
// //     if (player1Time < player2Time) 
// //     {
// //         return player2Time
// //     } else if (player1Time > player1Time)
// //     {
// //         return player1Time
// //     } else {
// //         return player1Time
// //     }
// // }

// // // let getFastestRace = getFastestRaceTime()

// // function getTotalRaceTime() {
// //     return player1Time + player2Time
// // }

// // totRaceTime = getTotalRaceTime()

// // console.log(totRaceTime)

// // let randomNumber = Math.floor(Math.random() * 6) + 1

// // console.log(randomNumber)

// // function rollDice() {
// //      randNumber = Math.floor(Math.random() * 6 + 1)
// //      return randNumber
// // }

// // console.log(rollDice())

// //LOGICAL OPERATORS

// // let hasSolvedChallenge = false
// // let hasHintsLeft = false

// // if (hasSolvedChallenge == false && hasHintsLeft == false)
// // {
// //     showSolution()
// // }

// // function showSolution() {
// //     console.log("Show the solution..............")
// // }

// // let likesDocumentaries = true
// // let likesStartups = false

// // if ( likesDocumentaries == true || likesStartups == true)
// // {

// //     recommendMovie()
// // }
// // function recommendMovie() {
// //     console.log("Hey, check out this new files we think ce go like am")
// // } 
// // let castle = {
// //     available: true,
// //     name: "Maguireshire",
// //     rooms: 4,
// //     special: ["servants", "jacuzzi"]
// // }

// // console.log(castle.special)

// // let person = {
// //     name: "Gideon",
// //     age: 27,
// //     country: "Libya"
// // }

// // function logData() {
// //     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// // }

// // logData()

// // let age = 30

// // if ( age < 6) {
// //     console.log("free")
// // } else if (age >= 6 && age <= 17) {
// //     console.log("Child dsicount")
// // } else if (age >= 18 && age <= 26) {
// //     console.log("student discount")
// // } else if (age >= 27 && age <= 66) {
// //     console.log("Full price")
// // } else {
// //     console.log("senoir citizen dsicount")
// // }

// // let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// // for ( let i = 0; i < largeCountries.length; i++){
// //     console.log(largeCountries[i])
// // // }

// // let largeCountries = ["Tuvala", "India", "USA", "Indonesia", "Monaco"]
// // largeCountries.shift()
// // largeCountries.unshift("China")
// // largeCountries.pop()
// // largeCountries.push("Pakistan")

// // console.log(largeCountries)

// // let dayOfMonth = 31
// // let weekday = "Friday"

// // if (dayOfMonth === 31 && weekday === "Friday")
// // {
// //     console.log("Spooky face")
// // }

// // let hands = ["rocks", "paper", "scissor"]

// // function picker() {
// //     rand = Math.floor(Math.random()*3);

// //     console.log(hands[rand])
// // }

// // picker()

// let fruits = ["apple", "orange", "apple", "apple", "orange"]
// let appleShelf = document.querySelector("#apple-shelf")
// let orangeShelf = document.querySelector("#orange-shelf")

// function placer () {
//     for (let i = 0; i < fruits.length; i ++){
//         if (fruits[i] === "orange"){
//             orangeShelf.textContent += fruits[i] + " "
//         }
//         else if (fruits[i] === "apple"){
//             appleShelf.textContent +=  fruits[i] + " "
//         }
//     }
// }

// placer()

// function save() {
//     alert('button clciked')
//     console.log("button clicked")
// }


let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.abnie(newsite opushed")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)




// myLeads =JSON.stringify(myLeads)
// // myLeads = JSON.parse(myLeads)
// // myLeads.push("amina.com")
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const savebtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const buyBtn = document.getElementById("div-el")
const delBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myLeads", "www.abaane.com")//setter
// console.log(localStorage.getItem("myLeads"))//getter

if (leadsFromLocalStorage) 
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


// tabBtn.addEventListener("click", function (){

//     chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {

//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))    })
//         render(myLeads)

// })


function render(leads) {
    let listItems = ""
for ( let i = 0; i < leads.length; i++){

      listItems += `
      <li>
         <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
         </a>
      </li>
      `
    console.log(listItems)

  
    // const li = document.createElement("li")
    // li.textContent = leads[i]
    // buyBtn.append(li)
}

buyBtn.innerHTML = listItems
}


// delBtn.addEventListener("dblclick", function (){
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// savebtn.addEventListener("click", function()
// {
//     myLeads.push(inputEl.value)
//     inputEl.value = '';
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))


//     render(myLeads)
//    console.log(localStorage.getItem("myLeads"))
// }
// )
// buyBtn.innerHTML = "<button onclick='buy()'>BUY!</button>" 

// function buy() {
//     buyBtn.innerHTML += "<p>Thank you for buying!</p>"
//
//diff process
//create elemet
//set text content
// append to ul
//}


// let boxBtn = document.querySelector("#box")
// boxBtn.addEventListener("click", function() {
//     alert("u want to open abi?")
//     console.log("i want to open this box")
// })

//Template String

// const recipient = "James"
// sender = "Salis"

// const email = `Hey ${recipient} 
// !How are
 

// is it going?

// Cheers ${sender}`

// console.log(email)

// localStorage.setItem("myLeads", "https://setnewsite.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

// function greetUser(name, greeting) {
//     console.log( `${greeting}, ${name}`)
// }

// greetUser("hwllo", "motto")

// function add(num1, num2) {
//     let sum = num1 + num2
//     return sum

// }

// console.log(add(3,4))


// function getFirst(arr) {
//     return arr [1]

// }

// fruits = ["apple", "sanquas", "sdwwr"]

// console.log(getFirst(fruits))

// let player = "Amos"
// let opponent = "Wright"
// const game ="MK4"
// let points = 0
// let hasWon = false

// points = 100
// hasWon = true

// if (hasWon){
//     console.log(`${player}  got  ${points}  points and won the game  ${game} game!` )
// } else {
//     console.log(`The winner is ${opponent}! and ${player} lost the game`)
// }

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
// function courses(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//         }
// }

// courses(myCourses)

// pushed = localStorage.setItem("item", "Amose")
// console.log(localStorage.getItem("item")) 

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// let scoreBtn = document.getElementById("view")

// scoreBtn.addEventListener("click", function() {
//     console.log(data[0].score)
// }
// )

function generateSentence(desc, arr){
    let sentence = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length - 1
    for(let i = 0; i < arr.length; i++){
        if (i === lastIndex){
            sentence += arr[i]
        } else {
            sentence += arr[i] + ", "

        }
    }
 console.log(sentence)
}
generateSentence("best things", ["food", "alewa"])