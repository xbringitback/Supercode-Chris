let date1 = new Date(1999, 10, 5, 15);//PM
let date2 = new Date(); //now
let date3 = new Date(2019, 12, 3, 12);//PM
let date4 = new Date(2000, 1, 1, 11);//AM
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

const amPm = date => {
	let amPm = date.getHours() < 12 ? "AM" : "PM";
	return amPm;
};

console.log(amPm(date1));
console.log(amPm(date2));
console.log(amPm(date3));
console.log(amPm(date4));


// let date1 = new Date(1999, 10, 5, 15) //PM
// let date2 = new Date() // now
// let date3 = new Date(2019, 12, 3, 12) //PM
// let date4 = new Date(2000, 1, 1, 11) //AM

// function amPM(dateInput) {
//     let hours = dateInput.getHours();

//     if (hours < 11.59){
//         return "AM";
//     } else {
//         return "PM";
//     }

// }
// console.log(amPM(date1));
// console.log(amPM(date2));
// console.log(amPM(date3));
// console.log(amPM(date4));