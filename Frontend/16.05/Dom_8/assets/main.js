let count = 0;

const body = document.querySelector("body");
const output = document.querySelector("#demo");
const redInput = document.querySelector("#rot");
const greenInput = document.querySelector("#grun");
const blueInput = document.querySelector("#blau");


function changeBackground (color) {
    count++;
    body.style.backgroundColor = color;
    output.innerHTML = `Wir haben die Farbe ${count} mal geändert.`;
}

function changeHandle() {
    count++
    const myHexaCode = Hexacode(redInput.value,greenInput.value,blueInput.value);
    body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value} , ${blueInput.value})`;
    output.innerHTML = `RGB(${redInput.value}, ${greenInput.value} , ${blueInput.value}) ${myHexaCode}`;
}

function Hexacode(intEins, intZwei, intDrei) {
    const hexEins = Number(intEins).toString(16);
    const hexZwei = Number(intZwei).toString(16);
    const hexDrei = Number(intDrei).toString(16);
    return `#${hexEins}${hexZwei}${hexDrei}`;
}