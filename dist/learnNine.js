"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swapIdType(id) {
    if (typeof id === 'string') {
        //can use string methods
        return parseInt(id);
    }
    else {
        //can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
const newUser = {
    type: 'user',
    username: 'mario',
    email: 'mario@net.dev',
    id: 2
};
const newPerson = {
    type: 'person',
    firstname: 'luigi',
    age: 21,
    id: 1
};
logDetails(newUser);
logDetails(newPerson);
