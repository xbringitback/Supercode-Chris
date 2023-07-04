// Arrays 1.0
console.log("%c===Arrays1_0===", "color: red");

let person = ["Bing", "Bong", "Ling"];
let friends = ["Dani", "Murat", "Moore"];
let favoriteFood = ["Nudeln", "Reis", "Kartoffeln"];

console.log(person, friends, favoriteFood);

// Arrays 2.0
console.log("%c===Arrays2_0===", "color: red");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

// Arrays 3.0
console.log("%c===Arrays3_0===", "color: red");

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// Arrays 4.0
console.log("%c===Arrays4_0===", "color: red");

console.log(person);
console.log(person.length);
person.push("neue Person")
person.push("noch eine Person")
console.log(person);
console.log(person.length);

// Arrays 5.0
console.log("%c===Arrays5_0===", "color: red");

console.log(person);
let popPerson = person.pop();
console.log(popPerson);

console.log(friends);
let popFriends = friends.pop();
console.log(popFriends);

console.log(favoriteFood);
let popFood = favoriteFood.pop();
console.log(popFood);

// Arrays 6.0
console.log("%c===Arrays6_0===", "color: red");

console.log(person);
let shiftPerson = person.shift();
console.log(shiftPerson);
console.log(person);

console.log(friends);
let shiftFriend = friends.shift();
console.log(shiftFriend);
console.log(friends);

console.log(favoriteFood);
let firstFavoriteFood = favoriteFood.shift();
console.log(firstFavoriteFood);
console.log(favoriteFood);

// Arrays 7.0
console.log("%c===Arrays7_0===", "color: red");

console.log(person);
person.unshift("irgendeine Person")
person.push("Long")
console.log(person);

console.log(friends);
friends.unshift("Petro")
friends.push("Sarah")
console.log(friends);

console.log(favoriteFood);
favoriteFood.unshift("Bolognese")
favoriteFood.push("Auflauf")
console.log(favoriteFood);

// Arrays 8.0
console.log("%c===Arrays8_0===", "color: red");

let target = ["Weiß", "ich", "nicht"];
console.log(target);
let sliceTarget = target.slice(1,2);
console.log(sliceTarget);

// Arrays 9.0
console.log("%c===Arrays9_0===", "color: red");

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

console.log(text);
let splitText = text.split(".");
console.log(splitText);

let splitTextAgain = text.split(" ");
console.log(splitTextAgain);

let splitTextCrazy = text.split("");
console.log(splitTextCrazy);