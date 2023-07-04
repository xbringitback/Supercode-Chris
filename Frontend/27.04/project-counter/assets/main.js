const output = document.querySelector(".output");

function add1() {
   output.innerHTML = Number(output.innerHTML)+1;
}
function sub1() {
    output.innerHTML = Number(output.innerHTML)-1;
}
function add10() {
    output.innerHTML = Number(output.innerHTML)+10;
}
function sub10() {
    output.innerHTML = Number(output.innerHTML)-10;
}
function add100() {
    output.innerHTML = Number(output.innerHTML)+100;
}
function sub100() {
    output.innerHTML = Number(output.innerHTML)-100;
}
function reset() {
    output.innerHTML = 0;
}
function mult2() {
    output.innerHTML = Number(output.innerHTML)*2;
}