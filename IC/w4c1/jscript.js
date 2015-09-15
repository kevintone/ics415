var getTime = "Get the current time:";
document.getElementById("currentTime").onclick = getCurrentTime;
document.getElementById("greet").onmouseover = getGreeting();

function getCurrentTime(){
    document.getElementById("funcTime").innerHTML=Date();
}

function mouseDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Thnaks";
}

function mouseUp(obj) {
    obj.style.backgroundColor ="#D94A38";

    obj.innerHTML = "Click Me :)";
}

function enlargeImage(obj) {
    obj.style.width = "200px";
    obj.style.height ="200px";
}

function normalImage(obj) {
    obj.style.width = "100px";
    obj.style.height = "100px";
}


function getGreeting() {
    var greeting = "Have A Great Day :)"
    docutment.getElementById("theGreeting").innerHTML=print(greeting);
}