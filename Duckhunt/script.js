var duck = document.getElementById("duck");
var stage = document.getElementById("stage");
var score = document.getElementById("score");
var miss2 = document.getElementById("miss2")
var hit = 0;
var miss = 0;

var direction = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
setInterval(Fly, 500)

posTop = 0;
posLeft = 0;

function Fly(){
    move = direction[Math.floor(Math.random() * 7)];
    console.log(move);
    
   // this prevents the duck from going outside of the stage border
    if(posTop <= 50){
        posTop = 120
    };
    if(posLeft <= 50){
        posLeft = 120
    };
    if(posTop >= 400){
        posTop = 280
    };
    if(posLeft >= 700){
        posLeft = 580
    }

    // this allows the duck to move in any direction
    if(move == "N"){
        duck.style.top = (posTop = posTop - 75) + "px"
    }
    if(move == "NE"){
        duck.style.top = (posTop = posTop - 75) + "px"
        duck.style.left = (posLeft = posLeft + 75) + "px"
    }
    if(move == "E"){
        duck.style.left = (posLeft = posLeft + 75) + "px"
    }
    if(move == "SE"){
        duck.style.top = (posTop = posTop - 75) + "px"
        duck.style.left = (posLeft = posLeft + 75) + "px"
    }
    if(move == "S"){
        duck.style.top = (posTop = posTop - 75) + "px"
    }
    if(move == "SW"){
        duck.style.top = (posTop = posTop + 75) + "px"
        duck.style.left = (posLeft = posLeft - 75) + "px"
    }
    if(move == "W"){
        duck.style.left = (posLeft = posLeft - 75) + "px";
    }
    if(move == "NW"){
        duck.style.top = (posTop = posTop - 75) + "px";
        duck.style.left = (posLeft = posLeft - 75) + "px";
    }
}

duck.onclick = function() {

    hit++;
    score.innerHTML = "score: " + hit;
}

stage.onclick = function () {
    hit--;
    score.innerHTML = "score: " + hit;
    miss++;
    miss2.innerHTML = "miss: " + miss;
}







    


