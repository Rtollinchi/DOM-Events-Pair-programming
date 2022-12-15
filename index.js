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
    size += 1;
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

let colorButton = document.body.querySelector("#background");
let userInput = document.body.querySelector("#colorSelected");
// console.log(userInput);
// let color = "white";
// document.body.style.backgroundColor = color;
// const body = document.body.querySelector('body');
colorButton.addEventListener('click', function onClick(event){
    event.preventDefault();
    document.body.style.backgroundColor = userInput.value;

})
// console.log(color);

