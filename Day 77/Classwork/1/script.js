const div1 = document.getElementById('div1')
div1.addEventListener('click', function(event) {
    let currentDiv = event.target;
    let message = 'Clicked on: ' + currentDiv.id;

    while (currentDiv.parentElement && currentDiv.parentElement.id) {
        currentDiv = currentDiv.parentElement;
        message += ', ' + currentDiv.id;
    }

    console.log(message);
});