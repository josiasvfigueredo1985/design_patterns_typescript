// Decorator base class

import Coffee from "./ICoffee";

// This is an abstract class that all decorators will inherit from.
export default abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}
