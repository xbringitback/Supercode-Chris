const output = document.querySelector(".output");

const data = () => {
    let date = new Date();
    console.log(date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    output.innerHTML = `${day}/${month}/${year}`;
}
data();

