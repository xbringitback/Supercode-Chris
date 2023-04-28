function weather() {
    let wetter = document.querySelector("#wetter").value;
    const output = document.querySelector(".output");
    if ( wetter >= 8 && wetter <=10) {
        output.innerHTML = " Das Wetter ist Super";
    }else if (wetter >=6 && wetter <=7) {
        output.innerHTML = " Das Wetter ist gut"
    }else if (wetter >=3 && wetter <=5) {
        output.innerHTML = " Das Wetter ist okay"
    }else {
        output.innerHTML = " Das Wetter ist schlecht"
    }
}