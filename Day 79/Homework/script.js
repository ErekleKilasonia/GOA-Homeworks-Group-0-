// const arr = [{"john":17},{"max":15},{"Tom":19}];


// function returnNames(element)
// {
//     return Object.keys(element);
// }

// console.log(arr.map(returnNames));


// const array = [1,2,3,4,5];


// function odd_or_even(element)
// {
//     return element % 2 === 0;
// }

// console.log(array.map(odd_or_even))

// const arra = [{"john":8},{"max":5},{"Tom":6}];

// function returnWhoPassed(element)
// {
//     return Object.values(element) > 5;
// }


// console.log(arra.filter(returnWhoPassed));

// const ar = ["image.png","image.pdf","image.jpg","img.jpg"];

// function onlyJpg(element){
//     return element.includes(".jpg");
// }

// console.log(ar.filter(onlyJpg));


// const arr = [1,2,3,4,5];

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

const arr = [1,2,3,4,5];

function manualFilter(func,list)
{
    const array = [];

    for (let i = 0; i < list.length; i++){
        if(func(list[i]))
        {
            array.push(list[i]);
        }
        
    }
    return array;

}

function manualFunc(element)
{
    return element % 2 === 0;
}

console.log(manualFilter(manualFunc,arr));