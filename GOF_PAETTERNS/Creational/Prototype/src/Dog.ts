import Animal from "./Animal";

// Class using the prototype
export default class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says woof!`);
  }
}
