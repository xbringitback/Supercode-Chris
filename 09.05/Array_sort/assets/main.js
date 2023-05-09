console.log("%c ===1.0sort()===", "color: red;");
// Aufgabe1

let languages = ["JavaScript","Python","Java","Ruby","PHP","C++","CSS","C#","Go","C","TypeScript","Swift",];

function Sortierung() {
    languages.sort();
    console.log(languages);
}
Sortierung();

console.log("%c ===2.0sort()===", "color: red;");
// Aufgabe2

let languages2 = ["JavaScript","Python","Java","Ruby","PHP","C++","CSS","C#","Go","C","TypeScript","Swift"];

function Sortierung2() {
    languages2.sort();
    languages2.reverse();
    console.log(languages2);
}
Sortierung2();

console.log("%c ===3.0sort()===", "color: red;");
// Aufgabe3
  
let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

const numberSort = (a, b) => {
    return a-b;
}
numArray1.sort(numberSort);
console.log(numArray1);

console.log("%c ===4.0sort()===", "color: red;");
// Aufgabe4

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const numberSort2 = (a, b) => {
    return a-b;
}
numArray1.sort(numberSort2);
console.log(numArray2);
