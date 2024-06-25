function myfunc(){
    let num1 = Number(prompt("Enter a first Number: "));
    let num2 = Number(prompt("Enter a second Number: "));
    let num3 = Number(prompt("Enter a third Number: "));
    let sum = num1 + num2 + num3
    alert("Your numbers sum is: "  + String(sum))
}


let btn = document.getElementById("changer")
let rst = document.getElementById("reset")
let p = document.getElementById("color")

btn.addEventListener("click", function(){
    p.textContent = "Hello ma boiiii";
    p.style.color = "red";
    p.style.fontSize = "25px";
})

rst.addEventListener("click", function(){
    p.textContent = "Hello";
    p.style.color = "black";
    p.style.fontSize = "16px";

})









