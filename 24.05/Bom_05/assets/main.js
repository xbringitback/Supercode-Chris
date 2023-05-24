let interval;

const startMinCountdown = () => {
    let timeDisplay = document.querySelector("#time");
    let minutesInput = document.querySelector("#minutes");

    let minutes = parseInt(minutesInput.value);
    let seconds = minutes * 60;

    interval = setInterval(countDown, 1000);

    function countDown() {
        if (seconds === 0) {
            clearInterval(interval);
        } else {
            minutes = Math.floor(seconds / 60);
            let remainingSeconds = seconds % 60;
            let formattedTime = formatTime(minutes, remainingSeconds);
            timeDisplay.innerHTML = formattedTime;
            seconds--;
        }
    }
}

const formatTime = (minutes, seconds) => {
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    return formattedMinutes + ":" + formattedSeconds;
}

const pauseMinCountdown = () => {
    clearInterval(interval);
}

const restartMinCountdown = () => {
    clearInterval(interval);
    let timeDisplay = document.querySelector("#time");
    timeDisplay.innerHTML = "00:00";
    document.querySelector("#minutes").value = "";
}
