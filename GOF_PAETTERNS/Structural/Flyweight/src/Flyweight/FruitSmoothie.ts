import Fruit from "../Interfaces/IFruit";

export default class Smoothie {
  private fruits: Fruit[] = [];

  addFruit(fruit: Fruit): void {
    this.fruits.push(fruit);
  }

  display(): void {
    console.log("Smoothie contains:");
    this.fruits.forEach((fruit) => fruit.display());
  }
}
