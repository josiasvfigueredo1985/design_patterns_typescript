// Composite class
import Graphic from "./IGraphic";

// Represents a composite graphical object (e.g., a group of shapes).
export default class CompositeGraphic implements Graphic {
  private children: Graphic[] = [];

  add(graphic: Graphic): void {
    this.children.push(graphic);
  }

  draw(): void {
    console.log("Drawing a composite graphic");
    for (const child of this.children) {
      child.draw();
    }
  }
}
