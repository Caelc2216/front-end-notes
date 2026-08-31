// Bad Java Script
let age = 5;

// Good TypeScript
let newage: number = 5; // This is explicit type
let newage2 = 5; // This is implicit type
newage2 = 10; // This is allowed because TypeScript can infer the type
age = "cat"; // JavaScript will allow this, but TypeScript will throw an error because "cat" is not a number.

// let var const
// dont use var - (old people)

// const is for values that will never change
const pi = 3.14;

// in C# function/method interchangably
function add(a: number, b: number, name?: string): number { // This is a function with optional parameter
    return a + b;
}

const add2 = (a: number, b: number): number => {return a + b}; // This is an arrow function

function add3(...numbers: number[]): number { // This is a function with rest parameter
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

