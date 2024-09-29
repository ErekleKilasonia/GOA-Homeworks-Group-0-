const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.addEventListener('click', function() {
    parent.style.backgroundColor = 'yellow';
});
child.addEventListener('click', function() {
    child.style.backgroundColor = 'orange';
    console.log("hello")
}, true);

child.addEventListener('click', function() {
    child.style.backgroundColor = 'red';
});
