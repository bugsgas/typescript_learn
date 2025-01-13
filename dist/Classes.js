"use strict";
//clases 101
class Pizza {
    constructor(title, price) {
        this.base = 'Classic';
        this.toppings = [];
        this.title = title;
        this.price = price;
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
