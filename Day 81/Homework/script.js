// function manualMap(func,list)
// {
//     const array = [];

//     for (let i = 0; i < list.length; i++){
//         array.push(func(list[i]));
//     }
//     return array;

// }

// function manualFunc(element)
// {
//     return element **2
// }

// console.log(manualMap(manualFunc,arr));

// const arr = [1,2,3,4,5];

// function manualFilter(func,list)
// {
//     const array = [];

//     for (let i = 0; i < list.length; i++){
//         if(func(list[i]))
//         {
//             array.push(list[i]);
//         }
        
//     }
//     return array;

// }

// function manualFunc(element)
// {
//     return element % 2 === 0;
// }

// console.log(manualFilter(manualFunc,arr));



// const array = ["hello","apple",'green'];

// function cap(element)
// {
//     return element.charAt(0).toUpperCase() + element.slice(1);
// }

// console.log(array.map(cap));

// const arr = ["John","alex","Mamuka"];

// function names(e)
// {
//     return e.length < 5 && e[0] === e[0].toUpperCase();
// }

// console.log(arr.filter(names));


const ar = [10,5,38,904,905,3,79,87,85,92];


function filt(e)
{
    return e>20 && e % 5 === 0;
}

console.log(ar.filter(filt));