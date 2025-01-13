"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union types
let someId;
someId = 1;
someId = 'string';
let email = null;
email = 'mario@netninja.dev';
email = null;
let anotherId;
anotherId = "asd12313";
anotherId = 5;
//union type pitfall
function swapIdType(id) {
    //can only use props and methods common to
    //both number and string types
    // parseInt(id) --> not allowed
    //  parseInt(id)
    return id;
}
swapIdType('5');
