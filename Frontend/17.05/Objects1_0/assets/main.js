const person = {
    name: "Chris",
    alter: 24,
    sagNameAlter: () => {
        alert(`${person.name}, ${person.alter}`)
    }
}
person.sagNameAlter();

console.log(`${person.name}, ${person.alter}`);