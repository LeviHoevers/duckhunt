var duck = document.getElementById("duck");
var stage = document.getElementById("stage");

var direction = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
setInterval(Fly, 100)

posTop = 0;
posLeft = 0;

function Fly(){
    test = direction[Math.floor(Math.random() * 7)]
    
   
    if(posTop <= 50){
        posTop = 120
    }
     if(test == "N"){
        duck.style.top = (posTop = posTop - 75) + "px"
    }
}
    


