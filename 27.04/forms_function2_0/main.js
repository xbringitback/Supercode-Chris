let output = document.querySelector(".output");
let style1 = document.querySelector(".styling");

function birthYear() {
    const year = document.querySelector(".year");
    output.innerHTML = 2023 - year.value
}

style1.style.display = "flex";
style1.style.flexDirection = "column";
style1.style.justifyContent = "center";
style1.style.alignItems = "center";
style1.style.height = "100vh"