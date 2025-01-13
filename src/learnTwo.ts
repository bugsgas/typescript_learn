export {};

//Arrays

let names:string [] = ['mario', 'luigi', 'peach']
let ages:number [] = [12, 21, 23]

names.push('bowser')
ages.push(12)

//type inference with arrays

let fruits = ['apples', 'bananas','mangos']
fruits.push('orange')
const f = fruits[3]

let things = [1, true, 'hello']
const t = things[0]

//object literals

let user:{firstName:string, age:number, id:number} = {
    firstName: 'mario',
    age: 21,
    id: 1
}

user.firstName = 'peach'
user.id = 2

//type inference with object literals

let person = {
    name: 'luigi',
    score: 21
}

person.name = 'mario'
person.score = 90
