const text = "Sam is going to codingschool";
let upper = text.toUpperCase();

let lower = text.toLowerCase();

let result1 = text.slice(0, 3).toUpperCase() + text.slice(3, 16) + text.slice(-6).toUpperCase();

let result2 = text.slice(0,3).toLowerCase() + text.slice(3, 16).toUpperCase() + text.slice(-6);

let result3 = text.slice(0, 1).toUpperCase() + text.slice(1, 4).toLowerCase() + text.slice(4, 5).toUpperCase() + text.slice(5, 7).toLowerCase() + text.slice(7, 8).toUpperCase() + text.slice(8, 13).toLowerCase() + text.slice(13, 14).toUpperCase() + text.slice(14, 15).toLowerCase() + text.slice(15, 16).toUpperCase() + text.slice(-6, -5).toUpperCase() + text.slice(-5).toLowerCase();


document.write(`${upper} <br> ${lower} <br> ${result1} <br> ${result2} <br> ${result3}`);