// //! Aufgabe 1

// let x = "Hello";
// let y = "World<br>";

// z = x + y;
// document.write(z);

// n = x + " " + y

// document.write(n);

// x += "World";

// document.write(x);

// let meinString = "ich bin Erster";

// meinString += "Ich komme auf Platz zwei"

// console.log(meinString);

// ! Aufgabe 2

// document.write("<h--1>Hello World!</h--1><p>Have a nice day!</p>");

// myText = "Hello again";

// document.write(myText);

// vorname = "Chris";
// nachname = " M";

// let name = vorname += nachname;

// document.write (name)

// ! Aufgabe 3 

// let alter = window.prompt("Gib mir bitte dein alter");
// console.log(alter);

// let b = 5;
// let a = b * 5-3;
// window.alert(a);

// let mann ="Robert Wadlow ist der größe Mann der Welt :";
// let grosse = "2,72m";

// window.confirm(mann + grosse);

// ! Aufgabe 4

// let picture = document.querySelector("#gallery").innerHTML = '<figure><figcaption><img src="https://images.unsplash.com/photo-1612100616950-bc3c2b3bf386?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjg0NDg3NDUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900">1</figcaption></figure>';

// document.querySelector("#gallery").innerHTML += '<figure><figcaption><img src="https://images.unsplash.com/photo-1612100616950-bc3c2b3bf386?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjg0NDg3NDUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900">2</figcaption></figure>';

// document.querySelector("#gallery").innerHTML += '<figure><figcaption><img src="https://images.unsplash.com/photo-1612100616950-bc3c2b3bf386?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjg0NDg3NDUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900">3</figcaption></figure>';

// ! Aufgabe 5

// document.getElementById("info").innerHTML = "<h1>Hello World</h1>";

// document.getElementById("info").innerHTML += "<h2>How are you</h2>";

// document.getElementById("container").innerHTML = "<p>start of the element";

// document.write("end of the element");

// info.innerHTML += "<h1>Hello World</h1>";
// info.innerHTML += "<h2>How are you</h2>";

// ! Aufgabe 6

// function intro2(paramName) {
//     let varName = "SuperCoder";
//     console.log(`Hi, ${varName} Meine Name ist ${paramName}`);
// }
// intro2("Chris")

// ! Aufgabe 7

// function intro3(name, stadt, alter) {

//     console.log(`Hallo mein Name ist ${name}. Ich bin ${alter}Jahre alt. Ich komme aus ${stadt}`);
// }
// intro3("Chris", "München", "24")

// ! Aufgabe 8

// function math(math, math2) {

//     console.log("Multiplication: " + math * math2);
//     console.log(`Multiplication: ${math * math2}`); 

//     console.log("Divison: " + math / math2);
//     console.log(`Divison: ${math / math2}`);
// }
// math(20, 5)

//  ! Aufgabe 9

// let output = document.querySelector(".output");

// function getInputValue() {
//     let text = document.getElementById("inputNumber").value;
//     output.innerHTML = text * 2;
// }

// ! Aufgabe 10

// let output = document.querySelector(".output");

// function getInputValue() {
//     let input = document.getElementById("inputNumber").value;
//     output.innerHTML = 2023 - input;
// }

//  ! Aufgabe 11

// let output = document.querySelector(".output");

// function getInputValue() {
//     let inputOne = document.getElementById("inputNumberOne").value;
//     let inputTwo = document.getElementById("inputNumberTwo").value;
//     output.innerHTML = inputOne - inputTwo;
// }

// ! Aufgabe 12

// let number = document.querySelector(".number");
// let count = 0;
// let plus1 = document.querySelector(".plus1");
// let minus1 = document.querySelector(".minus1");
// let plus10 = document.querySelector(".plus10");
// let minus10 = document.querySelector(".minus10");
// let plus100 = document.querySelector(".plus100");
// let minus100 = document.querySelector(".minus100");
// let reset = document.querySelector(".reset");
// let mal2 = document.querySelector(".mal2");

// plus1.addEventListener("click", () => {
//   count++;
//   number.innerHTML = count;
// });

// minus1.addEventListener("click", () => {
//   count--;
//   number.innerHTML = count;
// });

// plus10.addEventListener("click", () => {
//   count = count + 10;
//   number.innerHTML = count;
// });

// minus10.addEventListener("click", () => {
//   count = count - 10;
//   number.innerHTML = count;
// });

// plus100.addEventListener("click", () => {
//   count = count + 100;
//   number.innerHTML = count;
// });

// minus100.addEventListener("click", () => {
//   count = count - 100;
//   number.innerHTML = count;
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   number.innerHTML = count;
// });

// mal2.addEventListener("click", () => {
//   count = count * 2;
//   number.innerHTML = count;
// });

// let count = 0;
// let output = document.querySelector(".output");

// function createButton(calc, pressed) {
//   let button = document.createElement("button");
//   button.innerHTML = calc;
//   button.addEventListener("click", pressed);
//   document.body.appendChild(button);
// }

// let  numbers = [+1, -1, +10, -10, +100, -100, "Reset", "x2"];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers);
//     createButton(numbers[i], () => {
//         if (numbers[i] === "Reset") {
//             count = 0;
//         } else if (numbers[i] === "x2") {
//             count *= 2;
//         } else {
//             count += numbers[i];
//         }
//         number.innerHTML = count;
//       });
// }

// ! Aufgabe 13

// const headline = document.querySelector("h1");

// function change() {
//     headline.classList.add("red");
//     headline.style.backgroundColor = "red"
// }
// function reset() {
//     headline.classList.remove("red");
//     headline.style.backgroundColor = "white"
// }

// ! Aufgabe 14

// function changeBackground() {

//     let redValue = document.querySelector("#red").value;
//     let greenValue = document.querySelector("#green").value;
//     let blueValue = document.querySelector("#blue").value;

//     let rgbColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";

//     document.querySelector("body").style.backgroundColor = rgbColor;
// }

// document.querySelector("#red").addEventListener("change", changeBackground);
// document.querySelector("#green").addEventListener("change", changeBackground);
// document.querySelector("#blue").addEventListener("change", changeBackground);

// ! Aufgabe 15

// const btn = document.getElementById("btn");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const input = document.getElementById("input").value;
//     document.body.style.backgroundColor = input;
// });

// ! Aufgabe 16

// const btn = document.getElementById("btn");
// let input = document.getElementById("input");
// let output = document.querySelector(".output")

// function adult() {
//     let inputNum = Number(input.value);
//     if (inputNum >=18){
//         output.innerHTML = "Volljährig";
//     } else {
//         output.innerHTML = "Minderjährig";
//     }
// }

// ! Aufgabe 17

// let input = document.getElementById("input");
// const output = document.querySelector(".output");

// function weather() {
//     let weatherQuality = Number(input.value);
//     if (weatherQuality >= 8 && weatherQuality <= 10){
//         output.innerHTML = "Das Wetter ist super";
//     } else if (weatherQuality >=6 && weatherQuality <= 7) {
//         output.innerHTML = "Das Wetter ist gut";
//     } else if (weatherQuality >=3 && weatherQuality <=5) {
//         output.innerHTML = "Das Wetter ist okay";
//     } else if (weatherQuality <=2) {
//         output.innerHTML ="Das Wetter ist schlecht";
//     } else {
//         output.innerHTML ="too Hot";
//     }
// }

// ! Aufgabe 18

// let aqiOutput = document.querySelector(".aqiOutput");
// let outputConcern = document.querySelector(".output1");
// let outputEffect = document.querySelector(".output2");
// let bodyBg = document.querySelector("body")

// function checkAirQuality() {
//     let aqiQuality = document.getElementById("aqi").value;
//     if (aqiQuality <= 50) {
//         outputConcern.innerHTML = "Level of health concern: Good ";
//         outputEffect.innerHTML = "Level of health effect: Little or no risk";
//         bodyBg.style.backgroundColor = "green";
//     } else if (aqiQuality >= 50 && aqiQuality <= 100) {
//         outputConcern.innerHTML = "Level of health concern: Moderate ";
//         outputEffect.innerHTML = "Level of health effect: Acceptable quality";
//         bodyBg.style.backgroundColor = "yellow";
//     } else if (aqiQuality >= 100 && aqiQuality <= 150) {
//         outputConcern.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
//         outputEffect.innerHTML = "Level of health effect: Generable publics not likely affected";
//         bodyBg.style.backgroundColor = "orange";
//     }
//     aqiOutput.innerHTML = "AQI: " + aqiQuality;
// }

// ! Aufgabe 19

// let calc = () => {
//     let input = document.getElementById("input").value;
//     let ergebnis = input - 27;
//     if (ergebnis >= 27) {
//         console.log(ergebnis * 2);
// }
// }

// ! Aufgabe 20

// let input = document.getElementById("input");
// let output = document.querySelector(".output")

// function greaterThan() {
//     let inputNum = Number(input.value);
//     if (inputNum >=18){
//         output.innerHTML = "Ja. Du Darfst";
//     } else {
//         output.innerHTML = "Nein. Du darfst nicht";
//     }
// }

// ! Aufgabe 21

// const Pi = Math.PI;

// const roundedPi = Pi.toFixed(2);
// console.log(roundedPi);

// ! Aufgabe 22

// let randomNum = (Math.random());
// console.log(randomNum);

// let randomNum1_10 = Math.floor(Math.random() * 10 + 1)
// console.log(randomNum1_10);

// let randomNum1_100 = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum1_100);

// ! Aufgabe 23

// let array = [3.14,193.4464,0.8596433607,-2.940629089,];

// let calc = (arr, i) => {
//     console.log(i);
//     console.log(arr);
//     console.log(array[i].toFixed(2));
//     console.log(arr.toFixed(2));

// }
// array.forEach(calc);

// array.forEach((arr, i) => {

// })

// ! Aufgabe 24 

// let roundTo = (Zahl, Genauigkeit) => {
//     console.log(Zahl.toFixed(Genauigkeit));
// }
// roundTo(3.1415926535, 5)

// ! Aufgabe 25

// let random = Math.floor(Math.random() * 10 + 1);

// bingBong = prompt("Schätzen Sie die Nummer zwischen 1 und 10.")
// 1
// if (random != bingBong) {
//     console.log("you lose");
// } else {
//     console.log("you win");
// }
// console.log(random);

// ! Aufgabe 26

// let person = ["bonga", "linga", "chonga"];
// let friends = ["tonga", "flonga", "blonga"];
// let favoriteFood = ["weiß", "ich", "nicht"];

// friends.push("di", "da");
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.unshift(person[0],person[1] );
// console.log(friends);

// let reise = ["kü","kp","ka"]

// reise.slice(1); // don't work
// console.log(reise.slice(1, 2));

// console.log(person);
// console.log(person[1], friends[1], favoriteFood[2]);

// ! Aufgabe 27

// const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

// text.split(","); // don't work
// console.log(text.split("."));
// console.log(text.split(" "));
// console.log(text.split(""));

// !Aufgabe 28

// let getraenke = ["Coca-Cola","Apfelsaft","Pepsi","Traubensaft","Sprite","Orangensaft","Red Bull Energy Drink","Fanta"];

// getraenke.sort();
// console.log(getraenke);

// let myDrinks = () => {
//     getraenke.sort();
//     console.log(getraenke);
// }
// getraenke.forEach((getraenk) => {
//     document.write(getraenk + "<br>")
// })

// ! Aufgabe 29

// let checkNumber = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];

// let calc = checkNumber.map((add, i) => {
//     if (add % 3 == 0) {
//         let result = add + 100;
//         return result
//     } else {
//         return "error"
//     } 
// })
// console.log(calc);

// ! Aufgabe 30

// let album = ["holidays.jpg","Restaurant.jpg","desktop","rooms.GIF","DOGATBEACH.jpg",];

// album.forEach((img, i) => {
//     if (-1 === img.indexOf(".")) {
//         album[i] = "invalid";
//     } else {
//         album[i] = album[i].slice(0, img.lastIndexOf(".")).toLowerCase();
//     }
// })
// console.log(album);

//  ! Aufgabe 31

// let getraenke = ["Coca-Cola","Apfelsaft","Pepsi","Traubensaft","Sprite","Orangensaft","Red Bull Energy Drink","Fanta"];

// let upperDrinks = getraenke.map((el, i) => {
//     return el.toUpperCase();
// }) 
// console.log(getraenke);
// console.log(upperDrinks);

//  ! Aufgabe 32

// let array = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];

// let mult = array.map((el, i ) => {
//     return el * 2;
// })
// console.log(mult.sort((el, i) => el - i));

//  ! Aufgabe 33

// let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// let celsius = fahrenheit.map((el, i) => {
//     return Math.round((el - 32) / 1.8);
// })
// console.log(celsius);

// ! Aufgabe 34

// let languages = ["JavaScript","Python","Java","Ruby","PHP","C++","CSS","C#","Go","C","TypeScript","Swift"];

// let sortierung = () => {
//     languages.sort();
//     console.log(languages);
// } 
// sortierung();

// ! Aufgabe 35

// let languages = ["JavaScript","Python","Java","Ruby","PHP","C++","CSS","C#","Go","C","TypeScript","Swift"];

// let sortierung = () => {
//     languages.sort();
//     languages.reverse();
//     console.log(languages);
// }
// sortierung();

// ! Aufgabe 36

// let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

// let numSort = () => {
//     numArray1.sort((a,b) => a - b);
//     console.log(numArray1);
// }
// numSort();

// ! Aufgabe 37

// let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

// let numSort = () => {
//     numArray2.sort((a,b) => a - b);
//     console.log(numArray2);
// }
// numSort();

// ! Aufgabe 38

// let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for ( let i = 1; i <= 6; i++) {
//     numArray.push(4)
//     console.log(numArray);
// }

// ! Aufgabe 39

// for ( let i = 1; i <= 10; i++) {
//     console.log("Hello World " + i);
// }

// ! Aufgabe 40

// let names = ["Freddy", "Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"];

// for ( let i = 1; i < names.length; i++) {
//     console.log(names[i]);
// }

// ! Aufgabe 41

// let imageArray = () => {
//     let returnArray = [];

//     for(i = 1; i <= 100; i++){
//         if (i < 10){
//             returnArray.push(`image_00${i}.jpg`);
//         } else if (i < 100) {
//             returnArray.push(`image_0${i}.jpg`);
//         } else {
//             returnArray.push(`image_${i}.jpg`);
//         }
//     }
//     console.log(returnArray);
// }
// imageArray()

// ! Aufgabe 42

// let btn = document.getElementById("btn");

// btn.addEventListener("click", ()  => {
//     let putIn = "";
//     let input = document.getElementById("input").value;
//     let output = document.querySelector(".output");
//     for( i = 0; i <= input; i++){
//         putIn += "o";
//     }
//     output.innerHTML = `L${putIn}P`;
// })

// ! Aufgabe 43

// numArr = [5, 22, 15, 100, 55];

// numArr.forEach((calc, i) => {
//     let output = document.querySelector(".output");
//     for (let i = 2; i < calc; i++){
//         if (calc % i === 0) {
//             let result = calc / i;
//             console.log(`${calc} lässt sich durch ${i} teilen! Das Ergebnis ist ${result}`);
//             output.innerHTML += (`${calc} lässt sich durch ${i} teilen! Das Ergebnis ist ${result} <br>`);
//         } 
//     }    
// })

// ! Aufgabe 44

// let btn = document.getElementById("btn");
// let output = document.querySelector(".output");

// btn.addEventListener("click", ()  => {
//     let putIn = "";
//     let input = document.getElementById("input").value;

//     if (input > 0 && input % 2 == 0){
//         for( i = 1; i <= input; i++){
//             putIn += "o";
//         }
//         output.innerHTML = `L${putIn}P`;
//     } else if ( input > 0 && input % 2 !== 0) {
//         for (i = 1; i <= input; i++) {
//             i % 2 ? (putIn += "o") : (putIn += "0");
//         }
//         output.innerHTML = `L${putIn}P`;
//     } else {
//         output.innerHTML = `Fail`;
//     }

// })

// ! Aufgabe 45

// let select = document.querySelector("#my-select");
// let output = document.querySelector(".output");

// select.addEventListener("change", () => {

//     output.innerHTML = "Sie haben ausgewählt " + select.value;
// })

// ! Aufgabe 46

// let click = document.getElementById("clickMe");

// let counter = 0;

// click.addEventListener("click", () => {
//     // counter += 1; geht auch
//     click.innerHTML = "Click me: " + counter++;
// })

// ! Aufgabe 47

// let farbe = document.querySelector("#farbeAuswahlen");
// let btn = document.querySelector("#button");

// btn.addEventListener("click", (e) => {
//     // let farbeIndex = farbe.selectedIndex; geht auch
//     e.preventDefault();
//     farbe.remove(farbeIndex);
// })

// ! Aufgbabe 48

// let btn = document.querySelector("#button");
// let farbe = document.querySelector("#farbeAuswahlen");
// let body = document.querySelector("body");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let farbeIndex = farbe.selectedIndex +1;
//     let farbeValue = farbe.value.toString().replace(/\s+/g, '');
//     console.log(farbeValue);
//     console.log(farbeIndex);
//     body.style.backgroundColor = farbeValue;
//     document.getElementById(`${farbeIndex}`).style.backgroundColor = farbeValue;
// });

// ! Aufgabe 49

// let person = {name:"Chris",alter: "18",

// sagNameAlter: () => {
// alert(`${person.name} ${person.alter}`)
// }
// };
// person.sagNameAlter();

// ! Aufgabe 50

// let unsereHaustiere = [
//     {
//       tiertyp: "Katze",
  
//       names: [
//         "Gipsy",
//         "Nala",
//         "Dinky"
//       ]
//     },
//     {
//       tiertyp: "Hunde",
//       names: [
//         "Knöpfchen",
//         "Pinselchen",
//         "Droopy"
//       ]
//     }
//   ];
//   console.log(unsereHaustiere[0].names[1]);
//   console.log(unsereHaustiere[1].names[2]);
//   console.log(unsereHaustiere[1].names);
//   unsereHaustiere[1].names = (["Balu", "Snoopy"]);
//   console.log(unsereHaustiere[1].names);

// ! Aufgabe 51

// let unserLager = {
//     schreibtisch: {
//       schublade: "Hefter"
//     },
//     schrank: {
//       "Obere Schublade": {
//         Ordner1: "Dokumente",
//         Ordner2: "Geheimnisse"
//       },
//       "Untere Schublade": "Cola"
//     }
//   };
//   console.log(unserLager);
//   console.log(unserLager.schrank["Obere Schublade"].Ordner2);
//   console.log(unserLager.schrank["Untere Schublade"]);
//   console.log(unserLager.schreibtisch.schublade);

// ! Aufgabe 52

// let myMusic = [
//     {
//       artist: "The Beatles",
//       title: "Abbey Road",
//       release_year: 1969,
//       medium: ["LP", "CD", "MC", "Download"],
//       gold: true
//     },
//     {
//       artist: "Pink Floyd",
//       title: "Dark Side of the Moon",
//       release_year: 1978,
//       medium: ["CS", "CD", "LP", "Download"],
//       gold: true
//     },
//     {
//       artist: "Led Zeppelin",
//       title: "Led Zeppelin IV",
//       release_year: 1971,
//       medium: ["CS", "LP", "Download"],
//       gold: true
//     },
//     {
//       artist: "Metallica",
//       title: "Kill ’Em All und Ride the Lightning",
//       release_year: 1983,
//       medium: ["LP", "CD", "MC", "Download"],
//       gold: true
//     }
//   ];
//   console.log(myMusic);


// //   document.write `Alle artists <br>`;
//   myMusic.forEach(music => {
//     const artists = `${music.artist}`;
//     document.write(`${artists} <br>`);
//     const titles = `${music.title}`;
//     document.write(`${titles} <br>`);
//     const mediums = (`${music.medium} <br>`);
//     document.write(`${mediums} <br>`);

//     const release = (`${music.release_year}`)
//     if (music.release_year < 1975) {
//         document.write(`${release}`);
//     }
//     document.write(`<br>`);
//   })

// ! Aufgabe 53

// let studentData = [
//     {
//       name: "Alex",
//       age: 23,
//       coop: false,
//       address: {
//         street: "Don Valley Business Park",
//         city: "Toronto",
//         postalCode: "ONM3C3E5"
//       },
//       emails: ["alex69@gmail.com", "alex123@yahoo.com"]
//     },
//     {
//       name: "Sandra",
//       age: 22,
//       coop: true,
//       address: {
//         street: "34 Lawrence Ave",
//         city: "Toronto",
//         postalCode: "ONM3C0E5"
//       },
//       emails: ["sandra@gmail.com", "sandra@yahoo.com"]
//     }
//   ];
//   console.log(studentData);


//   studentData.forEach(student => {
//     console.log(`${student.name}`);
//     console.log(`${student.coop}`);
//     console.log(`${student.address.city}`);
//     console.log(`${student.emails}`);
//   })
