// circumfarance calculater
let radius = document.getElementById ("radius");
let circumfarance = document.getElementById ("circumfarance");
console.log(circumfarance);
function calculatecircumfaran() {
    return circumfarance.innerHTML = (2 * 3.14 * `${radius.value}`);
}


// even-odd number identifier
let num= document.getElementById ("num");
let even_odd= document.getElementById ("even_odd");
console.log (even_odd)
function getEvenOdd() {
    if ( num.value % 2 == 0 ){
        return even_odd.innerHTML = (" number is even")
        
    }
    else {
        return even_odd.innerHTML = (" number is odd")

    }
}
 
// percentage calculaterS
let value= document.getElementById ("value");
let totalvalue= document.getElementById ("totalvalue");
let percentage= document.getElementById ("percentage");
console.log (percentage);
function getmypercentage () {
    return percentage.innerHTML=((value.value/totalvalue.value)*100 + "%")
}


let sec= document.getElementById ("sec");
let min=document.getElementById ("min");
console.log (min);
function calculatemin()
{
    return min.innerHTML=(sec.value/60 + "min");
}

let Min= document.getElementById ("Min");
let hour=document.getElementById ("hour");
console.log (hour);
function calculatehour()
{
    return hour.innerHTML=(Min.value/60 + "hour");
}

let Hour= document.getElementById ("Hour");
let Day=document.getElementById ("Day");
console.log (Day);
function calculateday()
{
    return Day.innerHTML=(Hour.value/24 + "day");
}

window.alert ("welcome");