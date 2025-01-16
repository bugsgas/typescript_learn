"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { name: 'shaun', score: 100, id: 3 },
    { name: 'mario', score: 110, id: 1 },
    { name: 'paech', score: 120, id: 2 }
]);
users.add({ name: 'luigi', score: 10, id: 4 });
users.deleteOne(1);
const user = users.loadAll;
console.log('load one - ', users.loadOne());
console.log('load All - ', users.loadAll());
