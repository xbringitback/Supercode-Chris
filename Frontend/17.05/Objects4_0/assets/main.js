let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
  ];

document.write("<p style='background-color: blue;'>Alle artists:</p>")
myMusic.forEach(function(song) {
    document.write(`<p>${song.artist}</p>`);
});
  

document.write("<p style='background-color: yellow;'>Alle title:</p>");
myMusic.forEach(function(song) {
    document.write(`<p>${song.title}</p>`);
});
  
document.write("<p style='background-color: green;'>Alle medium:</p>");
myMusic.forEach(function(song) {
    document.write(`<p>${song.medium}</p>`);
});
  
document.write("<p style='background-color: black; color: white;'>Alle releases älter als 1975:</p>");
myMusic.forEach(function(song) {
    if (song.release_year < 1975) {
        document.write(`<p>${song.release_year}</p>`);
}
});
  