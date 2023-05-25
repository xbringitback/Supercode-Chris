// Aufgabenstellung
// Nutze wieder die Picsum-Api:
// https://picsum.photos/v2/list

// Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als Nächstes für jeden Datensatz eine Kombination aus Bild und Autor in ein figure-Element wrappen und in deinem HTML ausgeben lassen.

// Die Elemente in deinem HTML sollten dann so aussehen: 
// <figure>
// 	<img src="https://picsum.photos/id/0/5616/3744">
// 	<figcaption>Alejandro Escamilla</figcaption>
// </figure>

fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let figcaption = document.createElement("figcaption");
            const imgSrc = data[i].download_url;
            const author = data[i].author;

            img.src = imgSrc;
            figcaption.innerHTML = author;

            document.body.appendChild(figure);
            figure.appendChild(img);
            figure.appendChild(figcaption);
        }
})
.catch((error) => {
    console.log(error);
});
