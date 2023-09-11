import Circle from "./Circle";
import CompositeGraphic from "./Composite";
import Square from "./Square";

// Example usage
// Create leaf objects
const circle = new Circle();
const square = new Square();

// Create a composite object and add leaf objects to it
const composite = new CompositeGraphic();
composite.add(circle);
composite.add(square);

// Draw the composite object, which in turn draws its children
composite.draw();
