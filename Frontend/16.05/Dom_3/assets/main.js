const button = document.querySelector("#navChange");
const changeHome = document.getElementById("navHome");

function reverse(j){
    return j.split("").reverse().join("");
}

button.addEventListener("click", () =>  {
    let textHome = changeHome.innerHTML;
    textHome = reverse(textHome);

    changeHome.style.backgroundColor = "pink";
    changeHome.style.padding = "20px";
    changeHome.style.margin = "10px";
    changeHome.style.fontFamily = "Lucida Sans"
    changeHome.innerHTML = textHome;
});