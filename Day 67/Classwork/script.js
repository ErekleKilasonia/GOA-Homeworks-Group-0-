let seconds = 0;
let minutes = 0;
let hours = 0;

const clock = setInterval(function(){
    seconds ++;
    if(seconds > 61){
        minutes ++;
        seconds = 0;
    }
    if(minutes > 61){
        hours ++;
        minutes = 0;
    }
    console.log(`${hours}:${minutes}:${seconds}`);
},1000)