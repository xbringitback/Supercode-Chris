let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" },
];

let arrayNamen = [];
let arrayPreise = [];
let arrayAnderung = [];
edelMetallPreise.forEach((metalle) => {
  arrayNamen.push(metalle.name);
  arrayPreise.push(metalle.preiseGramEuro);
  arrayAnderung.push(metalle.veranderung);
});
console.log(arrayNamen);
console.log(arrayPreise);
console.log(arrayAnderung);

const mapNamen = edelMetallPreise.map((metalle) => metalle.name);
const mapPreise = edelMetallPreise.map((metalle) => metalle.preiseGramEuro);
const mapAnderung = edelMetallPreise.map((metalle) => metalle.veranderung);

const filterPreis = edelMetallPreise.filter(
  (metalle) => metalle.preiseGramEuro > 50
);
console.log(filterPreis);

let table = document.createElement("table");

edelMetallPreise.unshift(["Name", "PreiseGramEuro", "Veranderung"]);

for (let i = 0; i < edelMetallPreise.length; i++) {
  let tableTr = document.createElement("tr");
  table.appendChild(tableTr);

  if (i === 0) {
    for (let j = 0; j < edelMetallPreise[i].length; j++) {
      let tableTh = document.createElement("th");
      tableTh.innerHTML = edelMetallPreise[i][j];
      tableTr.appendChild(tableTh);
    }
  } else {
    let nameTd = document.createElement("td");
    nameTd.innerHTML = edelMetallPreise[i].name;
    tableTr.appendChild(nameTd);

    let preisGramEuroTd = document.createElement("td");
    preisGramEuroTd.innerHTML = edelMetallPreise[i].preiseGramEuro;
    tableTr.appendChild(preisGramEuroTd);

    let veranderungTd = document.createElement("td");
    veranderungTd.innerHTML = edelMetallPreise[i].veranderung;
    tableTr.appendChild(veranderungTd);
  }
}
// console.log(table);
let tableBody = document.querySelector("body");
tableBody.appendChild(table);
