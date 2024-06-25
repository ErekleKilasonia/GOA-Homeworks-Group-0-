const prm = document.getElementById("imp");
const p = document.getElementById("myps");
prm.addEventListener("click", function(){
    let age = prompt("How old are you? ");
    while (isNaN(age) || age === "")
    {
        age = prompt("How old are you? ");
    }    
    if(age == 1)
        {
            p.textContent = "Hello my " + age + " year old boyyyy"
        }
        else
            p.textContent = "Hello my " + age + " years old boyyyy"
    

    
})
let num1 = 234;
let num2 = 231;
console.log(num1 - num2);
console.log(num1 + num2);
console.log(num1 * num2);
