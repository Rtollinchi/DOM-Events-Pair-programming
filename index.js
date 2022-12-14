const cookieButton = document.body.querySelector("#cookieCounter");
let counter = 0

cookieButton.addEventListener("click", function(){
    counter++;
    let clickCounter = document.querySelector("#clickCount");
    clickCounter.textContent = counter;
})

let magButton = document.querySelector("#magnifying");
let magMin = document.querySelector("#minimize");
let paragraph = document.querySelector("#text");
let size = 15
magButton.addEventListener("click", function () {
    size += 20;
   paragraph.style.fontSize=size + "px";
   if (size >= 100){
    size = 100
    
   }console.log(size)
})
magMin.addEventListener('click', function () {
    size--;
    paragraph.style.fontSize=size + "px";
    if (size <= 1){
        size = 1
    } console.log(size)
})



