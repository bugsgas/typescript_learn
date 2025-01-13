//clases 101

type Base = 'Classic' | 'Thick' | 'Thin' | 'Garlic'

class Pizza {
    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    title: string
    price: number
    base: Base = 'Classic'
    toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}

const pizza = new Pizza('mario special', 15)

pizza.selectBase('Classic')
pizza.addTopping('mushroom')
pizza.addTopping('olives')

console.log(pizza)