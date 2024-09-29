// function sums(numbers)
// {
//     sum = 0;
//     for(x of numbers)
//     {
//         sum += x;
//     } 
//     return sum;
// }

// console.log(sums([1,2,3,4,5,65,6]))

// function maxWord(words)
// {
//     max = words[0];
//     for(i of words)
//     {
//         if(i.length > max.length)
//         {
//             max = i;
//         }
//     }
//     return max;
    
// }

// console.log(maxWord(["orange","apple","pineapple"]));


// const object = {name:"nick",age:17,country:"zimbabwe"}


// function countProps(obj)
// {
//     let counter = 0;
//     for(i of Object.keys(obj))
//     {
            //count++;
//     }
//     return counter;
// }

// console.log(countProps(object))

// const object = {name:"nick",age:17,country:"zimbabwe"}


// function keyss(obj)
// {
//     const keys = []
//     for(let i of Object.keys(obj))
//     {
//         keys.push(i);
        
//     }
//     return keys;
// }

// console.log(keyss(object));



//global scope variables is accesible from everywhere you can accses it in function or outside the function
//local scope variable is declared in function or in block and only is accesible in function or in block
//hoisted means that variable cannot be accsesible without first declaring it


// const square = x => x * x;
// console.log(square(7))

// const evens = arr => arr.filter(num => !(num % 2));

// console.log(evens([1,2,3,4,5,6,6,7,7,7,64]))

// const sums = numbers => numbers.reduce((prev,next) => prev+next);

// console.log(sums([1,2,3,4]))

// const palindrome = string => string === string.split('').reverse().join('');
// console.log(palindrome("radar"));

// document.getElementById("btn").addEventListener("click",()=>
//     console.log(1)
// )

