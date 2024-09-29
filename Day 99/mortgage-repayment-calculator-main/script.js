// first input
const mortageAmount = document.getElementById("mortageAmount")
const currencySymbol = document.getElementById("currency-symbol")
const mortError = document.getElementById("mortageError")
const mortContainer = document.getElementById("input-container")
// second input
const yearsInput = document.getElementById("years-input")
const yearText = document.getElementById("year")
const yearError = document.getElementById("yearError")
const yearCont = document.getElementById("mort-input-container")
// third input

const rateInput = document.getElementById("rate-input")
const procSymbol = document.getElementById("proc")
const rateError = document.getElementById("rateError")
const rateCont = document.getElementById("rate-input-container");

// select

//first
const repayment = document.getElementById("rep")
const repInput = document.getElementById("repayment1")

//second
const interestOnly = document.getElementById("int")
const intOnly = document.getElementById("Interest-only1")

//select error

const selError = document.getElementById("intError")


//button
const btn = document.getElementById("btn")

// reps
let checked1 = false;
let checked2 = false;
let checked3 = false;
let checked4 = false;
const monthlyRep = document.getElementById("monthly-rep")
const totalRep = document.getElementById("total-rep")
//rights

const right = document.getElementById("right")
const rightAfter = document.getElementById("rightafter")

btn.addEventListener("click",function(){
    if(mortageAmount.value == "" || isNaN(mortageAmount.value))
    {
        mortContainer.style.border = "2px solid red";
        currencySymbol.style.backgroundColor = "red";
        currencySymbol.style.color= "white";
        checked1 = false;
        mortError.style.color = "red"
    }
    else{
        mortContainer.style.border = "1px solid hsl(200, 24%, 40%)";
        currencySymbol.style.backgroundColor = "hsl(202, 86%, 94%)";
        currencySymbol.style.color = "hsl(200, 24%, 40%)";
        mortError.style.color = "white"
        checked1 = true;
    }
    if(yearsInput.value == "" || isNaN(yearsInput.value))
    {
        yearCont.style.border = "2px solid red"
        yearText.style.backgroundColor = "red"
        yearText.style.color= "white"
        checked2 = false;
        yearError.style.color = "red"
    }
    else{
        yearCont.style.border = "1px solid hsl(200, 24%, 40%)";
        yearText.style.backgroundColor = "hsl(202, 86%, 94%)";
        yearText.style.color = "hsl(200, 24%, 40%)";
        yearError.style.color = "white"
        checked2 = true;
    }
    if(rateInput.value == "" || isNaN(rateInput.value))
    {
        rateCont.style.border = "2px solid red"
        procSymbol.style.backgroundColor = "red"
        procSymbol.style.color = "white"
        checked3 = true;
        rateError.style.color = "red"
    }
    else{
        rateCont.style.border = "1px solid hsl(200, 24%, 40%)";
        procSymbol.style.backgroundColor = "hsl(202, 86%, 94%)";
        procSymbol.style.color = "hsl(200, 24%, 40%)";
        rateError.style.color = "white"
        checked3 = true;
    }
    if(!repInput.checked && !intOnly.checked)
    {
        selError.style.color = "red"
        checked4 = false;
    }
    else{
        selError.style.color = "white"
        checked4 = true;
    }
    let p = mortageAmount.value;
    let r = rateInput.value / 100;
    let n = 12;
    let t = yearsInput.value;
    let calculation = p * (r / n) / (1 - (1 + r/n)**(-n*t))
    setTimeout(() => {
        if(checked1 && checked2 && checked3 && checked4)
        {
            monthlyRep.textContent = `£${calculation}`.slice(0,7)
            totalRep.textContent = `£${calculation * t * n}`.slice(0,9)
            right.style.display = "none";
            rightAfter.style.display = "flex";
        }
    }, "1");
})


