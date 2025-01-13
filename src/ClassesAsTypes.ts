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

const pizzaOne: Pizza = new Pizza('mario special', 15)
const pizzaTwo = new Pizza ('luigi special', 10)

function addMushroomsToPizzas(pizzas: Pizza[]): void {
    for ( const p of pizzas) {
        p.addTopping('mushrooms')
    }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo])

console.log(pizzaOne, pizzaTwo)