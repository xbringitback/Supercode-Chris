const headline = document.querySelector("h1");

function change() {
    headline.classList.add("red");
    headline.style.backgroundColor = "red"
}
function reset() {
    headline.classList.remove("red");
    headline.style.backgroundColor = "white"
}

