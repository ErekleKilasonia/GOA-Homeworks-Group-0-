function Person(name, lastname, age,log)
{
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.log = log;
}


const ConsoleLogEverything = function()
{
    return this.name + " " + this.lastname + " " + this.age;
}
const info = new Person("erekle","kilasonia",14,ConsoleLogEverything);
console.log(info.log())