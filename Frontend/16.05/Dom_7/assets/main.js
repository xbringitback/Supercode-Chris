//! querySelector()
//! addEventListener()
//! createElement()
// createTextNode()
// appendChild()

const text = document.querySelector("#userinput");
const submit = document.querySelector("#enter");
const unorderedList = document.querySelector("ul");

submit.addEventListener("click", () => {
    const list = document.createElement("li");
    const newText = document.createTextNode(text.value);
    unorderedList.appendChild(list);
    list.appendChild(newText);
})

document.addEventListener("keydown",(e) => {
    if(e.keyCode === 13) {
        const list = document.createElement("li");
        const newText = document.createTextNode(text.value);
        unorderedList.appendChild(list);
        list.appendChild(newText);
    }
})
