function adult () {
    
    // ?===
    // event.preventDefault();
    
    const output = document.querySelector(".output");
    let feld = document.getElementById("input").value;

    if(feld >= 18){
        output.innerHTML = "Ja, Du kannst Shisha rauchen.";
    }else{
        output.innerHTML = "Du darfst noch nicht Shisha rauchen.";
    }
}
