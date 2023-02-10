let value = document.getElementById("value");
let screen = document.getElementById("screen");
function getotp() {
  return (screen.innerHTML = Math.floor(Math.random() * `${value.value}` + 1));
}
