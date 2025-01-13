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
const pizza = new Pizza('mario special', 15);
pizza.selectBase('Classic');
pizza.addTopping('mushroom');
pizza.addTopping('olives');
console.log(pizza);
