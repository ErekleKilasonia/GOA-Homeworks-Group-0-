const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img = document.getElementsByTagName("img");
counter = 2

prev.addEventListener("click",function(){
    if(counter === 2)
    {
        counter--;
        img[0].src = "man1.png"
    }
    if(counter === 3)
    {
        counter--;
        img[0].src = "man2.png"
    }   
})

next.addEventListener("click",function(){
    if(counter === 2)
    {
        counter++;
        img[0].src = "man3.png"
    }
    if(counter === 1)
    {
        counter++;
        img[0].src = "man2.png"
    }   
})
