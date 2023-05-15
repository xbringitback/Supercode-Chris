console.log("%c ===1.0addEventListener===", "color: red;");
// Aufgabe1 ===
const mySelect = document.querySelector("#my-select");
let outputText = document.querySelector(".outputText")

mySelect.addEventListener("change", () => {
    outputText.innerHTML = "Sie haben ausgewählt " + mySelect.value;
})

console.log("%c ===2.0addEventListener===", "color: red;");
// Aufgabe2 ===

let clickButton = document.querySelector("#clickMe");
let num = 0;

clickButton.addEventListener("click", () => {
    clickButton.innerHTML = "Click me: " + num++;
})

console.log("%c ===3.0addEventListener===", "color: red;");
// Aufgabe3 ===

let selectColor = document.querySelector("#farbeAuswahlen");
let removeColor = document.querySelector("#button")

removeColor.addEventListener("click", () => {
    event.preventDefault();
    selectColor.remove(selectColor.selectedIndex);
})