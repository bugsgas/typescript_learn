export {};
//interfaces

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: 'mario',
    avatar: '/img/mario'
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'my post',
    body: 'some interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
}

//as function argument types

function createPost(post: Post):void {
    console.log(`created post ${post.title} by ${post.author.name}`)
}

createPost(newPost)

//with arrays

let posts: Post[] = [] 

posts.push(newPost)