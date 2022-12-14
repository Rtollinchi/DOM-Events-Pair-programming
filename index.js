const cookieButton = document.body.querySelector("#cookieCounter");
let counter = 0

cookieButton.addEventListener("click", function(){
    counter++;
    let clickCounter = document.querySelector("#clickCount");
    clickCounter.textContent = counter;
})