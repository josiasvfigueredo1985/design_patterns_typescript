import Fruit from "../Interfaces/IFruit";

export default class FruitSalad {
  private fruits: Fruit[] = [];

  addFruit(fruit: Fruit): void {
    this.fruits.push(fruit);
  }

  display(): void {
    console.log("Fruit Salad contains:");
    this.fruits.forEach((fruit) => fruit.display());
  }
}
