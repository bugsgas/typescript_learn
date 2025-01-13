"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumber = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumber(9, 3);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 10]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('mario', 'hello');
