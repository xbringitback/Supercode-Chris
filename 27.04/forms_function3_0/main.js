const output = document.querySelector(".output");

function diffYear() {
    const alter1 = document.querySelector(".alter1").value;
    const alter2 = document.querySelector(".alter2").value;

    output.innerHTML = "Die Differenz ist: " + (alter1 - alter2);
}