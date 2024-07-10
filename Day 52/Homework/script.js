const me = {
    name: "erekle",
    surname: "kilasonia",
    age: "14"
}
const engine = {
    sidzliere: "dzlieri",
    cxenisDzala:"yvela"
}


const car2 = {
    model: "BMW i8",
    color: "White",
    date: 2014,
    engine
};
console.log(car2.engine)


let name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let sub = document.getElementById("sub");


sub.addEventListener("click",function(e){
    e.preventDefault()
    const info = {
      name: name.value,
      lastname: lastname.value,
      age: age.value,
    };
    console.log(info)
    console.log(info.name)
    console.log(info.lastname)
    console.log(info.age)

})