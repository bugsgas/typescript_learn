export {};
//--------

interface Collection<T> {
    data: T[]
    name: string
}

const collectionOne: Collection<string> = {
    data: ['mario', 'luigi', ' peach'],
    name: 'mario characters'
}

const collectionTwo: Collection<number> = {
    data: [1,2,3,4,5],
    name: 'numbers'
}

function randomCollectionItem<T>(c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length)

    return c.data[i]
}

const resultOne = randomCollectionItem<string>(collectionOne)
const resultTwo = randomCollectionItem(collectionTwo)

console.log(resultOne)
console.log(resultTwo)