// Concrete Decorators
// These are concrete decorator classes that add specific behavior

import CoffeeDecorator from "./BaseDecorator";

// to the core component.
export default class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2; // Adding the cost of milk
  }

  description(): string {
    return this.coffee.description() + ", Milk"; // Adding milk to the description
  }
}
