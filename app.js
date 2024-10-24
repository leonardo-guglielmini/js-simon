const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numberList = document.getElementById("numbers-list");
const answerForm = document.getElementById("answers-form");
const userFormInput = document.getElementById("input-group").getElementsByTagName("input");

let numbers = [];
let userNumbers = [];
let timer = 3;

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

function removeElement(el){

    el.classList.add("d-none");

}

function changeText(text){
    text.innerHTML="Inserisci ora i numeri che ricordi (non è importante l'ordine)";
}

function displayForm(){
    answerForm.classList.remove("d-none");
}

function checkResult(userList,list,el){
    let result=[], resultCounter=0;
    for(let i=0; i<5;i++){
        for(j=0;j<5;j++){
            //console.log(userList[j], list[i]);
            if (userList[j]==list[i]){
                result[i]=userList[j];
                //console.log(result[i]);
                resultCounter++;
                //console.log("uguale", resultCounter);
            }
        }
        userFormInput[i].value="";
    }
    if(resultCounter===0){
        el.innerHTML=`Hai totalizzato 0 punti!`
        el.classList.add("text-danger","fw-bold");
    }else{
        el.innerHTML=`Hai totalizzato ${resultCounter} punti! ${result}`;
        el.classList.add("text-success","fw-bold");
    }
}



numbers = generateNumbers(numbers);
displayNumbers(numberList, numbers);

const timeRemain=setInterval(countdownFunction, 1000);

setTimeout( function (){
    clearInterval(timeRemain);

    removeElement(countdown);
    removeElement(numberList);
    changeText(instructions);
    displayForm();
}, (timer+2)*1000)

answerForm.addEventListener("submit", function(){
    event.preventDefault();

    for(let i=0; i< userFormInput.length; i++){
        userNumbers[i]=userFormInput[i].value;
        //console.log(userNumbers[i]);
    }
    checkResult(userNumbers, numbers, instructions);
})