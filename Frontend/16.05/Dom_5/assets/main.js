const button = document.querySelector("#navChange");

const aArray = document.getElementsByTagName("a");

console.log(aArray);

button.addEventListener("click", () => {
    const color = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362",];
    for (let i = 0; i < aArray.length;i++) {
        aArray[i].style.backgroundColor = color[i];
        aArray[i].style.color = "#666";
        if (i === 2 || i === 3) {
            aArray[i].style.color ="#333";
        }
    }
})


// bonusAufgabe
document.addEventListener("keydown", () => {
    const color = ["#4CAF50", "#6262b8", "#b0543d", "#b03daa",];
    Array.from(aArray).forEach((a, i) => {
        a.style.backgroundColor = color[i];
        a.style.color = "#666";
        if (i === 2 || i === 3) {
            aArray[i].style.color ="#333";
        }
    })
})

// Added to ES6 is Array.from() that will convert an array-like structure to an actual array.