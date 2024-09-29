const form = document.getElementById("form");

const accounts = new Array();
const accountMaker = function(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}



form.addEventListener("submit", function(e){
    e.preventDefault();
    const usernameValue = form.elements.username.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const repeatedPasswordValue = form.elements.repeatedPassword.value;

    if(passwordValue === repeatedPasswordValue){

        acc = new accountMaker(usernameValue,emailValue,passwordValue);
        console.log(acc)
        accounts.push(acc);
        form.elements.username.style.borderColor = "LightGreen";
        form.elements.email.style.borderColor = "LightGreen";
        form.elements.password.style.borderColor = "LightGreen";
        form.elements.repeatedPassword.style.borderColor = "LightGreen";
    }
    else{
        form.elements.password.style.borderColor = "red";
        form.elements.repeatedPassword.style.borderColor = "red";
        alert("passwords didn't match");
    }
})
console.log(accounts);
