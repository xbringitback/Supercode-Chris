
const outputKey = document.querySelector("#outputKey");

const outputKeyCode = document.querySelector("#outputKeyCode");

const outputCode = document.querySelector("#outputCode");

const outputKeyCodeHead = document.querySelector("#outputKeyCodeHead")

document.addEventListener("keydown", (e) => {
    e.preventDefault();

    outputKey.innerHTML = e.key;

    outputKeyCodeHead.innerHTML = e.keyCode;

    outputKeyCode.innerHTML = e.keyCode;

    outputCode.innerHTML = e.code;
})

        document.addEventListener("keydown", function (event) {
        document.getElementById("outputKey").innerHTML = event.key;
        document.getElementById("outputKeyCode").innerHTML = event.keyCode;
        document.getElementById("outputKeyCode1").innerHTML = event.keyCode;
        document.getElementById("outputCode").innerHTML = event.code;
        })