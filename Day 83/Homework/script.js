const arr = [1,2,3,4,5,56,6,7,6,76];
// function sum(array)
// {
//     let counter = 0;
//     array.forEach(add);

//     function add(item)
//     {
//         counter += item;
//     }

//     return counter;

// }

// console.log(sum(arr));

// function logeverything(array)
// {
//     let counter = 0;
//     array.forEach(element => {
//         console.log(element);
//         console.log(counter);
//         counter++;

//     });
// }

// logeverything(arr);


// function product(array)
// {
//     const res = array.reduce(prod);

//     function prod(prev,next)
//     {
//         return prev * next;
//     }
//     console.log(res);
// }

// product(arr);

// const ar = [{"a":1,"b":3},{"c":1,"d":4}];

// function conc(array)
// {
//     const res = array.reduce(func,[]);
//     function func(prev,next)
//     {
//         return {...prev,...next};
//     }

//     console.log(res);
// }

// conc(ar);


// function manualforeach(array,func){
//     for(let i = 0; i < array.length; i++){
//         func(array[i])
//     }
// }


// function myFunc(e)
// {
//     console.log(e**2);
// }

// manualforeach(arr,myFunc);

// function manualreduce(array,func)
// {
//     let res = 0;

//     for (let i = 0; i < array.length-1; i+=2) {
//         console.log(array[i],array[i+1])
//         res += func(array[i],array[i+1]);
//     }
//     console.log(res);
// }

// function myFunc(prev,next)
// {
//     return prev + next;
// }

// manualreduce(arr,myFunc);


function mystery(array)
{
    const joined= array.join(' ');

    const arrr = joined.split(" ");

    const counter = arrr.reduce(func,{});
    function func(counts_dict,next)
    {
        if(counts_dict[next] == true)
        {
            counts_dict[next]+= 1;
        }
        else{
            counts_dict[next] = 1;
        }
        return counts_dict;
    }
    return counter

}


console.log(mystery(["hello","orange","apple","pineapple","apple","hello"]));
