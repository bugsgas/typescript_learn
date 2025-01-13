"use strict";
//extending type aliases
const personOne = {
    id: 1,
    firstName: 'mario'
};
const personTwo = {
    id: '2',
    firstName: 'Yoshi',
    email: 'yoshi@net.dev'
};
const personThree = {
    email: 'peach@net.dev'
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne) no email properties
printUser(personTwo);
// printUser(personThree) no id/firstname props
