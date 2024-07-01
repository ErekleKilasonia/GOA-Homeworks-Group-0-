const dice = document.getElementById("dice")
const userScore = document.getElementById("user")
const computerScore = document.getElementById("computer")
const userRolled = document.getElementById("score1")
const computerRolled = document.getElementById("score2")
const btn = document.getElementById("btn")
const whoWon = document.getElementById("whoWon")
let computersScore = 0
let usersScore = 0
dice.addEventListener("click", function(){
    let userRolls = Math.floor(Math.random() * 6) + 1;
    let computerRolls = Math.floor(Math.random() * 6) + 1;
    userRolled.textContent = "You: " + userRolls
    computerRolled.textContent = "Computer: " + computerRolls
    if(userRolls > computerRolls){
        usersScore++
        userScore.textContent = "Your score: " +  usersScore
        whoWon.textContent = "You won!"
    }
    else if(userRolls < computerRolls){
        computersScore++
        computerScore.textContent = "Computer's score: " +  computersScore
        whoWon.textContent = "You lost!"
    }
    else{
        computersScore++
        usersScore++
        userScore.textContent = "Your score: " +  usersScore
        computerScore.textContent = "Computer's score: " +  computersScore
        whoWon.textContent = "It was a tie!"
    } 
})

btn.addEventListener("click", function(){
    computersScore = 0
    usersScore = 0
    userRolled.textContent = "You: 0"
    computerRolled.textContent = "Computer: 0"
    computerScore.textContent = "Computer's score: 0"
    userScore.textContent = "Your score: 0"
})