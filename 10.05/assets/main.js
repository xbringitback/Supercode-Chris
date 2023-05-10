console.log("%c ===1.0for-loop===", "color: red;");
// Aufgabe 1 ===
let numArray = [];

for (let i = 0; i <= 10; i++){
    numArray.push(i);
}
console.log(numArray);


console.log("%c ===2.0for-loop===", "color: red;");
// Aufgabe 2 ===
for (let i = 1; i <=10; i++) {
    console.log("Hello World " + i);
}


console.log("%c ===3.0for-loop===", "color: red;");
// Aufgabe 3 ===
let names = ["Freddy","Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}


console.log("%c ===4.0for-loop===", "color: red;");
// Aufgabe 4 ===
const imageArray = () => {
    let returnArray = [];

    for (let i = 1; i <= 100; i++){
        if (i < 10){
            returnArray.push(`image_00${i}.jpg`);
        } else if (i < 100) {
            returnArray.push(`image_0${i}.jpg`);
        } else {
            returnArray.push(`image_${i}.jpg`);
        }
    }
    console.log(returnArray);
}
imageArray();


console.log("%c ===5.0for-loop===", "color: red;");
// Aufgabe 5 ===



console.log("%c ===6.0for-loop===", "color: red;");
// Aufgabe 6 ===
let 
numArr = [5, 22, 15, 100, 55]

numArr.forEach((j) => {
    for (let i = 2; i < j; i++) {
        if (j % i === 0) {
            let ergebnis = j / i;
            console.log(`${j} lässt sich durch ${i} teilen! Das Ergebnis ist ${ergebnis}`);
        }
    }
})


console.log("%c ===7.0for-loop===", "color: red;");
// Aufgabe 7
