export {};
//any type
let age: any
let title

age = 30
age = false

title = 25
title = true

//any type in arrays
let things: any[] = ['hello', true, 30, null]

things.push({id: 123})

//functions & any
function addTogether(value: any):any {
    return value + value
}

const resultOne = addTogether('hello')
const resutlTwo = addTogether(3)

//usefull when migrating from js to ts
// because using any wont cause any error
