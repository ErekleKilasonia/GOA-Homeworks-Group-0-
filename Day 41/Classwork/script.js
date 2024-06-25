const h4 = document.getElementById("h")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

let num1 = 0;

btn1.addEventListener("click",function(){
    num1 += 1;
    h4.textContent = num1;
})

btn2.addEventListener("click",function(){
    num1 = 0;
    h4.textContent = num1;
})

