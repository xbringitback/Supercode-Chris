// querySelector()
// addEventListener()
// let counter = 0;
// createElement()
// textContent()
// appendChild()
// classList

const wrap = document.querySelector(".umwickeln");
const button = document.querySelector("button");

let counter = 0;

button.addEventListener("click", () => {
    const divEl = document.createElement("div");
    divEl.textContent = counter;
    wrap.appendChild(divEl);
    divEl.classList.add("rechteck");
    if (counter % 10 === 0) {
        divEl.classList.add("weiss");
    }
    counter++
})
