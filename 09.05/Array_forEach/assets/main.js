console.log("%c ===1.0forEach()===", "color: red;");
// Aufgabe1

function myDrinks() {
    const getraenke = ["Apfelsaft", "Coca-Cola", "Fanta", "Orangensaft", "Pepsi", "Red Bull Energy Drink", "Sprite", "Traubensauft"];
  
    getraenke.sort();
  
    getraenke.forEach((getraenk) => {
      console.log(getraenk);
      document.write(`<p> ${getraenk} </p>`);
    });
  }
  myDrinks();

console.log("%c ===2.0forEach()===", "color: red;");
// Aufgabe2

let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];
console.log(checkNumber);

let mapNumber = checkNumber.map((num) => {
    if (num % 3 == 0) {
        return num + 100;
    } else {
        return num;
    }
})
console.log(mapNumber);

console.log("%c ===3.0forEach()===", "color: red;");
// Aufgabe3

let album = ["holidays.jpg","Restaurant.jpg","desktop","rooms.GIF","DOGATBEACH.jpg",];

const removeAlbum = (alben) => {
  return (alben.includes(".") ? alben.slice(0,alben.length-4) : "invalid").toLowerCase();
}
let newAlbum = album.map(removeAlbum);
console.log(newAlbum);