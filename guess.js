
let guesses=[];
let correctnumber=getRandomNumber();

window.onload=function(){
    document.getElementById("check").addEventListener('click',playgame);
    document.getElementById("restart").addEventListener('click',initGame);
}

function playgame(){
    let numberguess=document.getElementById("number-guess").value;
    displayresult(numberguess);
    getGuessHistory(numberguess);
    displayhistory();
}


function displayresult(numberguess){

    if(numberguess>correctnumber)
    {
       showNumberabove();
    }
    else if (numberguess<correctnumber){
        showNumberbelow();
    }
    else{
    showyouwon();
    }
}





function getRandomNumber(){
    let random=Math.floor(Math.random()*100)+1;
    return random;
}


function getdialog(type,text){

    let dialog;

    switch(type){

        case "won":
            dialog= `<div class='alert alert-success'>${text}</div>`;
            break;

        case "warning":
            dialog=`<div class='alert alert-warning'>${text}</div>`;
            break;
    } 
        return dialog;    
    }



function showyouwon(){

    const text="Awesome job,you got it!!";
    
    let dialog=getdialog("won",text);
    document.getElementById("result").innerHTML=dialog;
}

function showNumberabove(){

    const text="Your guess is too high!!";

    let dialog=getdialog("warning",text);
    document.getElementById("result").innerHTML=dialog;
}

function showNumberbelow(){

    const text="Your guess is too low!!";

    let dialog=getdialog("warning",text);
    document.getElementById("result").innerHTML=dialog;
}

function getGuessHistory(guess){

    guesses.push(guess);
    

}

function displayhistory(){
    let index=guesses.length-1;
    let list="<ul class='list-group'>";

    while(index>=0){
        list += "<li class='list-group-item'>" + "You guessed "  + guesses[index] + "</li>";
        index--;
    }

    list +="</ul>";
    document.getElementById("history").innerHTML=list;
  

}


function initGame(){

    // 1. Reset the correct number

     correctnumber=getRandomNumber();

    // 2. Reset the result display

    document.getElementById("result").innerHTML="";


    // 3. Reset the guesses array
    guesses=[];

    // 4. Reset the guess history display

    displayhistory(); // because we reset the guesses array,the loop won't iterate
}