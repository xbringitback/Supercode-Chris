let background = document.querySelector("body");
function checkAirQuality() {
    let quality = document.querySelector(".input").value;
    let aqi = document.querySelector(".aqi");
    const output1 = document.querySelector(".output1");
    const output2 = document.querySelector(".output2");


    if (quality <= 50) {
        aqi.innerHTML = "AQI = " + quality;
        output1.innerHTML = "Level of health concern: Good ";
        output2.innerHTML = "Level of health effect: Little or no risk ";
        background.style.backgroundColor = "green";
    } else if (quality >= 50 && quality <= 100) {
        aqi.innerHTML = "AQI = " + quality;
        output1.innerHTML = "Level of health concern: Moderate ";
        output2.innerHTML = "Level of health effect: Acceptable quality ";
        background.style.backgroundColor = "yellow"
    } else {
        aqi.innerHTML = "AQI = " + quality;
        output1.innerHTML = "Level of health concern: Unhealthy for sensitive groups ";
        output2.innerHTML = "Level of health effect: Generable publics not likely affected ";
        background.style.backgroundColor = "orange";
    }
}
background.style.display = "flex";
background.style.flexDirection = "column";
background.style.justifyContent = "center";
background.style.alignItems = "center";
background.style.height = "100vh"
background.style.fontSize = "2rem"