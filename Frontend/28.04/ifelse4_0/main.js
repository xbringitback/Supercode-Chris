function calculate(){
    let calc = document.querySelector("#calc").value;
    let differenz = calc - 27;
    if (differenz > 27){
        // differenz *= 2;
        console.log("multiplizier:" + " " + differenz * 2);
    }
}