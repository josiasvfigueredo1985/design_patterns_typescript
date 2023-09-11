import Fruit from "../Interfaces/IFruit";

// Concrete Flyweight classes
export default class Banana implements Fruit {
  display(): void {
    console.log("Banana");
  }
}
