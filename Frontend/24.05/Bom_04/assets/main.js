let msg = document.querySelector(".message");
let counter = document.querySelector("#count");

let count = 10;
const countDown = () => {
    count--;
    counter.innerHTML = count;
    if (count === 0) {
        clearInterval(interval);
        msg.style.display = "none";
    }

}
let interval = setInterval(countDown, 1000);