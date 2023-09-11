import CoffeeDecorator from "./BaseDecorator";

export default class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1; // Adding the cost of sugar
  }

  description(): string {
    return this.coffee.description() + ", Sugar"; // Adding sugar to the description
  }
}
