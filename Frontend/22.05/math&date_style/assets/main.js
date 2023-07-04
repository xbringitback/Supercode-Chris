let monate = ["Januar","Februar","März","April","Mai","Juni",
"Juli","August","September","Oktober","November","Dezember"];

let wochenTag = ["Sonntag","Montag","Dienstag","Mittwoch",
"Donnerstag","Freitag","Samstag"];

let data = new Date();
document.write(data + "<br>");
document.write(data.getFullYear() + "<br>");
document.write(data.getMonth() +1 + " Monat" + "<br>");
document.write(data.getDay() + " Tag" + "<br>");
document.write(data.getHours() + " Stunde" + "<br>");
document.write(data.getMinutes() + " Minute" + "<br>");
document.write(data.getSeconds() + " Sekunde" + "<br>");

let weekday = data.toLocaleString("default", { weekday: "short" });
document.write(weekday + "<br>");

let month = data.toLocaleString("default", { month: "long" });
document.write(month + "<br>");

const output = document.querySelector(".output");

output.innerHTML = `${weekday} ${data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()} PM`


// * alternativ
// let weekday = (wochenTag[myDate.getDay()]);
// console.log(weekday);

// let month = (monate[myDate.getMonth()]);
// console.log(month);