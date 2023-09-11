import MilkDecorator from "./MilkDecorator";
import SimpleCoffee from "./SimpleCoffee";
import SugarDecorator from "./SugarDecorator";

// Example usage

// Create a simple coffee
const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.description()); // Output: Simple Coffee
console.log(`Cost: $${simpleCoffee.cost()}`); // Output: Cost: $5

// Create a milk coffee by wrapping it with a MilkDecorator
const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(milkCoffee.description()); // Output: Simple Coffee, Milk
console.log(`Cost: $${milkCoffee.cost()}`); // Output: Cost: $7

// Create a coffee with milk and sugar by chaining decorators
const coffeeWithMilkAndSugar = new SugarDecorator(
  new MilkDecorator(simpleCoffee)
);
console.log(coffeeWithMilkAndSugar.description()); // Output: Simple Coffee, Milk, Sugar
console.log(`Cost: $${coffeeWithMilkAndSugar.cost()}`); // Output: Cost: $8
