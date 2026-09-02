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
let mappedDouble2 = scores.map(number => `Number: ${number}`);
for (const name of mappedDouble2) {
    console.log(name);
}
//# sourceMappingURL=index.js.map