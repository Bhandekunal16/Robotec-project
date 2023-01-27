let fs=document.getElementById("first")
let ss=document.getElementById("sec")
let ts=document.getElementById("three")
let fos=document.getElementById("four")
let fis=document.getElementById("fifth")
let six=document.getElementById("six")
let screen=document.getElementById("screen")
function getmarks() {
    return screen.innerHTML =parseInt(`${fs.value}`) + parseInt(`${ss.value}`)+ parseInt(`${ts.value}`) + parseInt(`${fos.value}`) + parseInt(`${fis.value}`) + parseInt(`${six.value}`)
}

let totalm=document.getElementById("totalmarks")
let screen2=document.getElementById("screen")
 function getpercentage() {
    return screen2.innerHTML= `${totalm.value}`/parseInt(600)*100
 }