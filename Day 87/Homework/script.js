// const arr = [1,2,3,4,5,6,6,-3];

// function myFunc(item,index)
// {
//     return (item >= 0);
// }

// arr.every(myFunc);

// const arr = ["   ", "","hello","orange"]

// function myFunc(item,index)
// {
//     return (item.trim() != "");
// }

// arr.every(myFunc);

// const arr = [true,true,true,true,false,true]

// function myFunc(item,index)
// {
//     return (item === true);
// }

// arr.every(myFunc);


// const arr = [1,2,3,4,5,6,6,-3];

// function myFunc(item,index)
// {
//     return (item %2 === 0);
// }

// arr.every(myFunc);


// const arr = [1,2,3,4,5,6,6,-3];

// function myFunc(item,index)
// {
//     return item %2 === 0;
// }


// function manualEvery(array,func)
// {
//     for (let i = 0; i < array.length; i++) {
//         if(!func(array[i])){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(manualEvery(arr,myFunc))

// const grades = [6,5,5,6,7,8,10]

// function check(grade)
// {
//     return grade > 8;
// }

// console.log(grades.some(check));

// const roles = ["admn","hello","pineapple","orange","admin"]

// function check(role)
// {
//     return role == "admin";
// }

// console.log(roles.some(check));



// const products = [{overdue:true},{overdue:false}]

// function check(prod)
// {
//     return prod["overdue"] == false;
// }

// console.log(products.some(check));


// const roles = ["admn","hello","pineapple","orange","admin"]

// function check(role)
// {
//     return role == "admin";
// }

// function manualSome(array,func)
// {
//     for (let i = 0; i < array.length; i++) {
//         if(func(array[i]))
//         {
//             return true;
//         }
        
//     }
//     return false;
// }

// console.log(manualSome(roles,check));


// const arr = [1,2,3,4,5,6,-5,34]

// function check(num)
// {
//     return num<0;
// }

// console.log(arr.find(check))


// const arr = [{name:"gela",id:777},{name:"mamuka",id:999}]

// function check(obj)
// {
//     return obj.id == 777;
// }

// console.log(arr.find(check));


// const tasks = [{task:"complete"},{task:"incomplete"},{task:"incomplete"}];

// function check(obj)
// {
//     return obj.task == "incomplete";
// }

// console.log(tasks.find(check));

// const arr = ["toy","orange","hello","pineapple"];

// function check(el)
// {
//     return el == "pineapple";
// }

// console.log(arr.find(check));


// const arr = ["toy","orange","hello","pineapple"];

// function check(el)
// {
//     return el == "pineapple";
// }

// function manualFind(array,func)
// {
//     for (let i = 0; i < array.length; i++) {
//         if(func(array[i]))
//         {
//             return array[i];
//         }
        
//     }
// }

// console.log(manualFind(arr,check));


// const roles = ["admn","pineapple","apple","orange","hello","admin"];

// function check(role)
// {
//     return role == "admin";
// }

// console.log(roles.findIndex(check));

// const arr = [{overdue: true},{overdue:false}];


// function check(obj)
// {
//     return obj.overdue == true;
// }

// console.log(arr.findIndex(check));

// const arr = [{name:"kombosto",inStock:true},{name:"fortoxali",inStock:false}];

// function check(obj)
// {
//     return obj.inStock == false;
// }

// console.log(arr.findIndex(check));

// const arr = ["toy","orange","hello","pineapple"];

// function check(el)
// {
//     return el == "pineapple";
// }

// function manualFindIndex(array,func)
// {
//     for (let i = 0; i < array.length; i++) {
//         if(func(array[i]))
//         {
//             return i;
//         }
        
//     }
// }

// console.log(manualFindIndex(arr,check));

// const text = "Hello world";
// console.log(text.indexOf("e"));


// const nums = [1,2,3,4,5,6];
// console.log(nums.indexOf(5));

// const text = "Hello world";
// console.log(text.indexOf("ell"));


// const arr = [{name:"mamuka"},{name:"nick"}]
// const names = arr.map((obj)=>obj.name);
// console.log(names.indexOf("mamuka"))

// const text = "Hello world";

// function manualIndexOf(strng,toFind)
// {
//     for (let i = 0; i < strng.length; i++) {
//         if(strng[i] == toFind)
//         {
//             return i
//         }
//     }
// }
// console.log(manualIndexOf(text,"e"))

// const text = "Hello world";
// console.log(text.lastIndexOf("l"));


// const words = ["hello","word","word","orange","pineapple","orange"];

// console.log(words.lastIndexOf("orange"))

// const arr = [{name:"mamuka",isActive:true},{name:"nick",isActive:false}];

// const actives = arr.map(obj => obj.isActive);

// console.log(actives.lastIndexOf(true));

const text = "Hello world";

function manualLastIndexOf(strng,toFind)
{
    let x = 0;
    for (let i = 0; i < strng.length; i++) {
        if(strng[i] == toFind)
        {
            x = i;
        }
    }
    return x
}
console.log(manualLastIndexOf(text,"l"))