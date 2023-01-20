// hello full namewith age
let firstn= document.getElementById ("firstn");
let lastn= document.getElementById ("lastn");
let age= document.getElementById ("age");
let name_age=document.getElementById("name_age");
console.log (name_age);
function calculatename() {
    return name_age.innerHTML = ( ` hello ${firstn.value}` + "  " + `${lastn.value}` + " your age is " + `${age.value}`);
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
