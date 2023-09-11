import Fruit from "../Interfaces/IFruit";

// Concrete Flyweight classes
export default class Strawberry implements Fruit {
  display(): void {
    console.log("Strawberry");
  }
}
