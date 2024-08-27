const child = document.getElementById("child");
const container = document.getElementById("container");

let left = 0;
let Top = 0;
const step = 10; 


const containerRect = container.getBoundingClientRect();

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "d":
            if (left + step + child.clientWidth <= containerRect.width) {
                left += step;
            }
            break;
        case "a":
            if (left - step >= 0) {
                left -= step;
            }
            break;
        case "s":
            if (Top + step + child.clientHeight <= containerRect.height) {
                Top += step;
            }
            break;
        case "w":
            if (Top - step >= 0) {
                Top -= step;
            }
            break;
    }


    child.style.left = left + 'px';
    child.style.top = Top + 'px';
});
