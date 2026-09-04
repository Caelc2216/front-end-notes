"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
let scores = [85, 42, 111];
let animals = ["cat", "dog", "spidermonkey"];
let active = [true, true, false];
scores.push(100);
console.log(scores[0]);
scores.pop();
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (const name of animals) {
    console.log(name);
}
let doubled = [];
for (let number of scores) {
    doubled.push(number * 2);
}
let mappedDouble = scores.map(number => number * 2);
let mappedString = scores.map(number => `Number: ${number}`);
for (const name of mappedString) {
    console.log(name);
}
const student = {
    name: "bob",
    grade: 85,
    active: true,
};
console.log(student.name);
console.log(student.grade);
console.log(student.active);
//# sourceMappingURL=index.js.map