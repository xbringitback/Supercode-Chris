let unserLager = {
    schreibtisch: {
      schublade: "Hefter"
    },
    schrank: {
      "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);  // Ausgabe: "Geheimnisse"
console.log(unserLager.schrank["Untere Schublade"]);        // Ausgabe: "Cola"
console.log(unserLager.schreibtisch.schublade); 
