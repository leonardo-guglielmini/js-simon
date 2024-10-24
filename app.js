const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numberList = document.getElementById("numbers-list");
const answerForm = document.getElementById("answers-form");

let numbers = [];
let timer = 10;

function generateNumbers(list) {
    for (let i = 0; i < 5; i++) {
        list[i] = Math.floor(Math.random() * (50 - 1) + 1);
    }
    //console.log(list);
    return list;
}

function countdownFunction() {
    countdown.innerHTML = timer;
    //console.log(timer)
    timer--;
}

function displayNumbers(ul, list) {
    for (let i = 0; i < 5; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(list[i]));
        ul.appendChild(li);
    }
}

numbers = generateNumbers(numbers);
displayNumbers(numberList, numbers);

const timeRemain=setInterval(countdownFunction, 1000);


