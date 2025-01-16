"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue({ title: 'Marmite Rules', thumbsUp: 200 });
console.log(post.id, post.title, post.thumbsUp);
