"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorOne = {
    name: 'mario',
    avatar: '/img/mario'
};
const newPost = {
    title: 'my post',
    body: 'some interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
//as function argument types
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//with arrays
let posts = [];
posts.push(newPost);
