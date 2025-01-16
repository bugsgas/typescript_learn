"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//--------
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
}
const users = new DataCollection([
    { name: 'shaun', score: 100 },
    { name: 'mario', score: 110 },
    { name: 'paech', score: 120 }
]);
users.add({ name: 'luigi', score: 10 });
const user = users.loadAll;
console.log('load one - ', users.loadOne());
console.log('load All - ', users.loadAll());
