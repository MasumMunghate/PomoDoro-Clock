var breakTime = 300;

var seccionTime = 1500;
var clockTime = seccionTime
var clockType  = "seccion";

var clockRunning = false;

var breakIndicator = document.querySelector("#Break-indicator");
var seccionOIndicator = document.querySelector("#seccion-indicator");
var clockcounter = document.querySelector("#clock-counter");

var clockButton = document.querySelector("#clock-button");
var resetButton = document.querySelector("#reset-button");
var clockLable = document.querySelector("#clock-Lable");


var minSec = function(time){
    var min = Math.floor(time/60);
    var sec = time %60;

    if(sec < 10) {
        sec = '0' + sec.toString();
    }
    return min + ' : ' +sec  
}

var resetApp = function(){
    breakTime = parseInt(breakIndicator.value) * 60;
    seccionTime = parseInt(seccionOIndicator.value) * 60;
    clockTime = seccionTime;
    clockType  = "seccion";
    clockLable.innerText = "Session";
    clockButton.innerText = "Start"
    updateClockCounter();
}


var updateClockCounter = function() {
    clockcounter.innerText = minSec(clockTime) ;
}
//parseInt(seccionOIndicator.value) * 60
updateClockCounter();

var countdown = function(){
    if(clockTime > 0 && clockRunning){
        clockTime -= 1;
        updateClockCounter();
    }else if (clockTime == 0 && clockRunning){
        if(clockType === "seccion" ){
            clockLable.innerText = "Break";
            clockType = 'break';
            clockTime = breakTime
            alert("Break Time !")
        }else{
            clockLable.innerText = "Session";
            clockType = 'seccion';
            clockTime = seccionTime;
            alert("Start Work")
        }
    }
}

var clockDownId;
clockButton.addEventListener('click' , function(){
    if(!clockRunning){
        clockRunning = true;
        clockDownId = window.setInterval(countdown , 1000);
        clockButton.innerText = "Pause";
    }else{
        clockRunning = false;
        clockButton.innerText = "Start";
    }

})

resetButton.addEventListener('click' , function(){
    resetApp();
})
