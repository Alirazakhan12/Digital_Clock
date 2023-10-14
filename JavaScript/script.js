function clock(){
let date = new Date()
let hour = date.getHours()
let min = date.getMinutes()
let seconds = date.getSeconds()
let session = "PM"

hour = hour <10?"0"+hour:hour
min = min <10?"0"+min:min
seconds = seconds <10?"0"+seconds:seconds
session = session >12?"AM":"PM"

if(hour >12){
  hour = hour-12
}

let sethour = hour
let setmin = min
let setsecond = seconds
let setsession = session
document.getElementById("hour").innerHTML = sethour
document.getElementById("min").innerHTML = setmin
document.getElementById("sec").innerHTML = setsecond
document.getElementById("session").innerHTML = setsession
}
setInterval(clock,1000)