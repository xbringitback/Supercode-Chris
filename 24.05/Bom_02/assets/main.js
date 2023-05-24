let counter = document.querySelector(".zeit");
const btn = document.querySelector("#btn");
let count = 100;

btn.addEventListener("click", () => {

    let countDown = () => {
        count--;
        counter.innerHTML = `${count}%`;
        if (count === 0) {
            clearInterval(interval);
        }
    }
    let interval = setInterval(countDown, 100); 
})
