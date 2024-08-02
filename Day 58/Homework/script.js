const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const sub = document.getElementById("submit");


function constructor(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
}


sub.addEventListener("click",function(e){
    e.preventDefault();
    const info = new constructor(name.value,email.value,password.value);
    console.log(info)

    const para = document.createElement("p");
    const user_name = document.createTextNode("Your name is " + info.name);
    const br1 = document.createElement("br");
    const user_email = document.createTextNode("Your email is " + info.email);
    const br2 = document.createElement("br");
    const user_password = document.createTextNode("Your password is " + info.password);
    para.appendChild(user_name);
    para.appendChild(br1);
    para.appendChild(user_email);
    para.appendChild(br2);
    para.appendChild(user_password);
    document.body.appendChild(para);
})




