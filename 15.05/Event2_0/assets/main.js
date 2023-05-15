const button = document.querySelector("#button");
let selectColor = document.querySelector("#farbeAuswahlen");
let body = document.querySelector("body");

button.addEventListener("click", () => {
    event.preventDefault();
    let bgColor = selectColor.value.toString().replace(/\s/g, '');
    let index = document.querySelector("#farbeAuswahlen").selectedIndex + 1;
    let indexString = document.getElementById(`${index}`);
    indexString.style.backgroundColor = bgColor;
    body.style.backgroundColor = bgColor;
})




// document.querySelector("#button").addEventListener("click", (e) => {
//     e.preventDefault();

//     let selection = document.querySelector("#farbeAuswahlen").value;
//     let index = document.querySelector("#farbeAuswahlen").selectedIndex;
//     let selectionOhneLeerzeichen = selection.replace(/\s+/g, '');

//     document.querySelector("body").style.backgroundColor = selectionOhneLeerzeichen;
//     document.getElementById(index).style.backgroundColor = selectionOhneLeerzeichen;
//   });