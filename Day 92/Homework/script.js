class Person {
    #number;
    constructor(name, age, gender,number){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#number = number;
    }
    greet()
    {
        console.log(`Hello, my name is ${this.name}!`);
    }
    get getAge() {
        return this.age;
    }
    get isAdult() {
        return this.age >= 18;
    }
    set changeName(Name) {
        this.name = Name;
    }
}

const person1 = new Person('nick', 45, 'Male',43243);

person1.greet();

console.log(person1.name);
console.log(person1.age); 
console.log(person1.gender); 

const person2 = new Person('Bob', 34, 'Male',2432);
person2.age = 24;
console.log(person2.age);

person1.changeName("mamuka");
