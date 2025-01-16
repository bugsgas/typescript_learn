export {};
//--------

class DataCollection<T> {
    constructor(private data: T[]) {}
    
    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }

    loadAll(): T[] {
        return this.data
    }

    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
}

interface User {
    name: string
    score: number
}

const users = new DataCollection<User>([
    {name: 'shaun', score: 100},
    {name: 'mario', score: 110},
    {name: 'paech', score: 120}
])

users.add({ name: 'luigi', score: 10})

const user = users.loadAll

console.log('load one - ', users.loadOne())
console.log('load All - ', users.loadAll())