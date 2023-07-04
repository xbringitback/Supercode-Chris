function check () {
    const output = document.querySelector(".output");
    let feld = document.querySelector(".feld").value;
    if(feld >= 18){
        output.innerHTML = "Volljährig";
    }else{
        output.innerHTML = "Minderjährig";
    }

}
