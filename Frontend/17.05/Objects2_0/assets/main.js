let unsereHaustiere = [
    {
      tiertyp: "Katze",
  
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);


unsereHaustiere[1].names = (["Gipys", "Nala", "Dinky"]);
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names = (["Balu", "Snoopy"]);
console.log(unsereHaustiere[1].names);