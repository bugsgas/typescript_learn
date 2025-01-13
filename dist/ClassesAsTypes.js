"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'Classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizzaOne = new Pizza('mario special', 15);
const pizzaTwo = new Pizza('luigi special', 10);
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
