const output = document.getElementById("txt");

const startTime = () => {
    const today = new Date();
    // const std = today.getHours();
    // const min = today.getMinutes();
    // const sec = today.getSeconds();
    document.getElementById("txt").innerHTML = today.toLocaleTimeString();
    // output.innerHTML = `${std}:${min}:${sec}`
}
setInterval(startTime, 1000);

