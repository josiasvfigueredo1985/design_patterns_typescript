// Core component
import Coffee from "./ICoffee";

// This is the concrete component that we want to decorate.
export default class SimpleCoffee implements Coffee {
  cost(): number {
    return 5; // The cost of a simple coffee
  }

  description(): string {
    return "Simple Coffee";
  }
}
