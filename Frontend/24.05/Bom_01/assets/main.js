// console.log(`Start Warten für 3 sekunden...`);

// const msg = () => {

//     console.log(`Erledigt. Du hast 3 Sekunden verschwendet.`);
// }
// setTimeout(msg, 2000);

let count = 10;

const timer = () => {
    console.log(count--);
    if (count === 0) {
        console.log("Endlich Feierabend");
        clearInterval(interval);
    }
    // let interval = setInterval(timer, 2000);
}
let interval = setInterval(timer, 1000);
