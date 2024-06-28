const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const sub = document.getElementById("sub")
const mail = document.getElementById("mail")
const pass = document.getElementById("pass")


const form = document.querySelector("form")
form.addEventListener("submit" , function(e){
    e.preventDefault()
    p1.textContent += mail.value
    p2.textContent += pass.value
})