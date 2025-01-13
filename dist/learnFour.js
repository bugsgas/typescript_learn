"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//any type
let age;
let title;
age = 30;
age = false;
title = 25;
title = true;
//any type in arrays
let things = ['hello', true, 30, null];
things.push({ id: 123 });
//functions & any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resutlTwo = addTogether(3);
//usefull when migrating from js to ts
// because using any wont cause any error
