// circumfarance calculater
let radius = document.getElementById ("radius");
let circumfarance = document.getElementById ("circumfarance");
console.log(circumfarance);
function calculatecircumfaran() {
    return circumfarance.innerHTML = (2 * 3.14 * `${radius.value}`);
}

// hello full namewith age
let firstn= document.getElementById ("firstn");
let lastn= document.getElementById ("lastn");
let age= document.getElementById ("age");
let name_age=document.getElementById("name_age");
console.log (name_age);
function calculatename() {
    return name_age.innerHTML = ( ` hello ${firstn.value}` + "  " + `${lastn.value}` + " your age is " + `${age.value}`);
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

// age calculater
let presentyear= document.getElementById ("presentyear");
let birthyear= document.getElementById ("birthyear");
let wishme= document.getElementById ("wishme");
console.log (wishme);
function getmybirthday() {
    return wishme.innerHTML=(`${presentyear.value}`-`${birthyear.value}`+" "+ "year");
}

// BMI calculater
let height= document.getElementById ("height");
let weight= document.getElementById ("weight");
let BMI= document.getElementById ("BMI");
console.log (BMI);
function getmyBMI (){
    return BMI.innerHTML= (weight.value / ((height.value * height.value)/10000)).toFixed(2)
}
 
// percentage calculaterS
let value= document.getElementById ("value");
let totalvalue= document.getElementById ("totalvalue");
let percentage= document.getElementById ("percentage");
console.log (percentage);
function getmypercentage () {
    return percentage.innerHTML=((value.value/totalvalue.value)*100 + "%")
}

// BMR calculater
let Height= document.getElementById ("Height");
let Weight= document.getElementById ("Weight");
let Age= document.getElementById ("Age") ;
let BMR= document.getElementById ("BMR");
console.log (BMR); 
function calculateBMR()
{ 
    return BMR.innerHTML= (((13.397* Weight.value)+(4.799 * Height.value) - (5.677 * Age.value)) + 88.362);
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