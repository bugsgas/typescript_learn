"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tuples
let person = ['mario', 30, true];
//tuples examples
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [100, 200];
function useCoords() {
    //get coorrds
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//named tuples
let user;
user = ['peach', 20];
console.log(user[1]);
