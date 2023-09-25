var timer= 60;
var score= 0;
var hitrn= 0;

//Event Bubbling: Jispe click kroge wo element par event raise hoga, aur event listener na milne par event element ke aprent pr listener dhundega, waha bhi na milne pr parent ke parent ke parent pr dhundega

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent= score;
}

function makeBubble(){
    var clutter= "";

    for(var i=1; i<=147; i++) {
        var rn= Math.floor(Math.random()*10)
        clutter+= `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML= clutter;
}

function runTimer(){
    var timerint= setInterval(function(){
        if(timer> 0) {
            timer--;
            document.querySelector("#timerval").textContent= timer;
        }
        else {
            clearInterval(timerint);
        }
    },1000);
}

function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickednum= Number(details.target.textContent);
    if(!isNaN(clickednum) && clickednum == hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();