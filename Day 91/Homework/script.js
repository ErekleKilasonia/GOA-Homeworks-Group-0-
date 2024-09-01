// const obj = {name:"mamuka",age:19};

// const obj2 = {name:"nick",age:18,position:"relative"};

// Object.assign(obj,obj2);

// console.log(obj);

// const obj = {name:"mamuka",age:19};

// const obj2 = {name:"nick",age:18,position:"relative"};
// Object.assign(obj,obj2);

// console.log(obj);


// const obj = {name:"mamuka",age:19};

// const obj2 = {name:"nick",age:18,position:"relative"};

// const obj3 = {name:"gela",age:"barkalaia"};

// Object.assign(obj,obj2,obj3)
// console.log(obj);

// const obj1 = {};
// const obj2 = {name:"mamuka",surname:"jorjoliani"};
// Object.assign(obj1,obj2);
// console.log(obj1);

// function extend(obj1,obj2)
// {
//     Object.assign(obj1,obj2);
// }

// function manualAssign(target, ...sources) {
//     for (const source of sources) {
//         for (const key in source) {
//             if (source.hasOwnProperty(key)) {
//                 target[key] = source[key];
//             }
//         }
//     }
//     return target;
// }


// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); 
// console.log(second); 
// console.log(rest);


// function gather(...numbers)
// {
//     const arr = []
//     for(i of numbers){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(gather(1,2,3,4,5,6));

// function printAll(...args) {
//     args.forEach(i => console.log(i));
//   }
  
// printAll('apple', 'banana', 'orange',"pineapple");

// function add(a, b){
//     return a + b;
// }
  
// function callAdd(...args){
//     return add(...args);
// }
  
// console.log(callAdd(3, 4))


// const person = { name: 'mamuka', age: 25, city: 'Tbilisi' };
// const { name, ...rest } = person;

// console.log(name);
// console.log(rest); 


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];

// console.log(combinedArray);


// const obj1 = { name: 'mamuka', age: 25 };
// const obj2 = { city: 'tbilisi', age: 34 };
// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);


// const numbers = [1, 2, 3];
// const arr = [0, ...numbers, 4];

// console.log(arr)


// const arr = [1, 2, 3];
// const copyArr = [...arr]

// console.log(copyArr);


// const str = "hello";
// const arr = [...str];

// console.log(arr);

// const [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b); 
// console.log(c); 

// const person = { name: 'mamuka', age: 36, city: 'Tbilisi' };
// const { name, age, city } = person;

// console.log(name);
// console.log(age); 
// console.log(city); 

// const person = { name: 'mamu', age: 15 };
// const { name: saxeli, age: asaki } = person;

// console.log(saxeli);
// console.log(asaki); 


// const [first, , third] = [1, 2, 3];
// console.log(first);
// console.log(third); 

// const people = [
//     { name: 'mamuka', age: 26 },
//     { name: 'nick', age: 34}
// ];
  
// for (let { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }

// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first);
// console.log(rest); 

// const [first, , , , last] = [1, 2, 3, 4, 5];
// console.log(first);
// console.log(last); 

// const people = [
//     { name: 'nick', age: 25 },
//     { name: 'john', age: 45 },
//     { name: 'mamuka', age: 23 }
//   ];
  
// const filtered = people.filter(({ age }) => age > 30);
// console.log(filtered);

// const mixedArray = [1, { name: 'nick' }, 3, { age: 34 }];
// const [num, { name }, , { age }] = mixedArray;

// console.log(num);
// console.log(name);
// console.log(age);

// function manualDestructuring(obj) {
//     const arr = [];
    
//     for (let i in obj) {
//         arr.push(obj[i]);
//     }
//     return arr;
// }
  
// const person = { name: 'nick', age: 23, city: 'Tbilisi' };
// const result = manualDestructuring(person);
  
// console.log(result); 

