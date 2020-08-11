var person = {
    "name": "Steve",
    "Specialism": "Software",
    "marks" : [56,34,78]
}

console.log(person);
console.log("Name: ",person.name);
console.log("Specialism ",person.Specialism);
person.marks.forEach(function(value) {
    console.log(value);
})