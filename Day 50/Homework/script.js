const money = document.getElementById("money")
const withdraw = document.getElementById("withdraw")
const withdrawButton = document.getElementById("with")
const deposit = document.getElementById("deposit")
const depositButton = document.getElementById("dep")

withdrawButton.addEventListener("click", function(){
    money.textContent = parseInt(money.textContent) + parseInt(withdraw.value)
})

depositButton.addEventListener("click", function(){
    const x = parseInt(money.textContent) - parseInt(deposit.value)
    if(x < 0){
        alert("You don't have enough money!")
    }
    else
        money.textContent = x
    
})

