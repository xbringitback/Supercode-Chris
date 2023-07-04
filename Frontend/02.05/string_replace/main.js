const text = "Sam is good at codingschool";
let result1 = text.replace("good", "bad").replace("codingschool", "school");
let result2 = text.replace("Sam", "Susi").replace("codingschool", "school");
let result3 = text.replace("codingschool", "tennis");
// let result = text.replace(/good/, "bad");

document.write(`${result1} <br> ${result2} <br> ${result3}`);