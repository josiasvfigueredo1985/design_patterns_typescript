import Animal from "./Animal";

export default class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} says meow!`);
  }
  scratch(): void {
    console.log(`${this.name} is scratching the couch!`);
  }
}
