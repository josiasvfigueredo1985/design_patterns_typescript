import Graphic from "./IGraphic";
// Leaf class
// Represents individual graphical objects (e.g., a circle, a square).
export default class Circle implements Graphic {
  draw(): void {
    console.log("Drawing a circle");
  }
}
