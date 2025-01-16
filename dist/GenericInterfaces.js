"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collectionOne = {
    data: ['mario', 'luigi', ' peach'],
    name: 'mario characters'
};
const collectionTwo = {
    data: [1, 2, 3, 4, 5],
    name: 'numbers'
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
console.log(resultOne);
console.log(resultTwo);
