console.log("%c ===1.0map()===", "color: red;");
// Aufgabe1

let getraenke = ["Coca-Cola","Apfelsaft","Pepsi","Traubensaft","Sprite","Orangensaft","Red Bull Energy Drink","Fanta"];

let upperDrinks = getraenke.map((big) => big.toUpperCase());
console.log(upperDrinks);

console.log("%c ===2.0map()===", "color: red;");
// Aufgabe2

let array = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];

const comp = (a, b) => {
    return a - b;
}
array.sort(comp);
console.log(array);

let array2 = array.map((bing) => {
    return bing * 2;
});
console.log(array2);

console.log("%c ===3.0map()===", "color: red;");
// Aufgabe3

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// let celcius = fahrenheit.map((bing) => {
//     return bing.toFixed();
// })
// let bingBong = celcius.map((bing2) => {
//     return ((bing2 - 32) / 1.8).toFixed();
// })
let celcius = fahrenheit.map((bing) => {
    return Math.round((bing - 32) / 1.8);
});

console.log(celcius);