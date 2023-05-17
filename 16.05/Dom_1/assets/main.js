console.log("%c ===1.0Dom===", "color: red;");
// Aufgabe 1

// function myFunction() {
//     let bgColor = 
//     if (change === false) {

//     }
//     let el = document.getElementsByClassName("example");
//     for (let i = 0; i < el.length; i++) {
//         el[i].style.backgroundColor = "black";
//         el[i].style.color = "white";
//     }
// }
const elementColorChange = document.getElementsByClassName("example");
let isChanged = false;


function myFunction() {
    let color1 = "black";
    let color2 = "white";

    if (isChanged === false){
        isChanged = true;
    } else {
        isChanged = false;
        color1 = "white";
        color2 = "black";
    }

    for (let i = 0; i < elementColorChange.length; i++){
        elementColorChange[i].style.backgroundColor = color1;
        elementColorChange[i].style.color = color2;
    }
};
