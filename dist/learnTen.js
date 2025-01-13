"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const something = { quantity: 50 };
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: 'mango',
    quantity: 12
};
const vehicle = {
    name: 'car',
    quantity: 3
};
const person = {
    name: 'mario',
    age: 50
};
printQuantity(fruit);
printQuantity(vehicle);
printQuantity({ quantity: 50 });
