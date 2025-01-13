export {};
//functions

function addTwoNumbers(a:number, b:number):number {
    return a + b
}

const subtractTwoNumber = (a:number, b:number):number => {
    return a - b
}

addTwoNumbers(3, 9)
subtractTwoNumber(9, 3)

function addAllNumbers(items: number[]) {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}

addAllNumbers([5,7,9,11,3,2,10])

// return type inference

function formatGreeting(name:string, greeting:string) {
    return `${greeting}, ${name}`
}

const result = formatGreeting('mario','hello')