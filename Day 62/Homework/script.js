function Id(name,surname,score){
    this.name = name;
    this.surname = surname;
    this.score = score;
}


const studentErekle = new Id("erekle","kilasonia","yvela");

console.log(studentErekle["name"]);
console.log(studentErekle["surname"]);
console.log(studentErekle.score);
console.log(studentErekle);
