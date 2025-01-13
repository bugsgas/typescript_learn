export {};
//clases 101

type Base = 'Classic' | 'Thick' | 'Thin' | 'Garlic'

class Pizza {
    constructor(private title: string, private price: number) {}

    private base: Base = 'Classic'
    private toppings: string[] = []

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