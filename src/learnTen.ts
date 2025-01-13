export {};
//reusable interfaces

interface hasQuantity {
    quantity: number
}

const something: hasQuantity = {quantity: 50}

function printQuantity(item: hasQuantity): void {
    console.log(`the quantity of the item is ${item.quantity}`)
}

const fruit = {
    name: 'mango',
    quantity: 12
}
const vehicle = {
    name: 'car',
    quantity: 3
}
const person = {
    name: 'mario',
    age: 50
}

printQuantity(fruit)
printQuantity(vehicle)

printQuantity({quantity: 50})