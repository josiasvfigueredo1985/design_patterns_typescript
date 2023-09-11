import FruitSalad from "./Flyweight/FruitSalad";
import Smoothie from "./Flyweight/FruitSmoothie";
import Banana from "./Fruits/Banana";
import Strawberry from "./Fruits/Strawberry";
// Example usage
// Fruits creation (Flyweight objects).
const strawberry = new Strawberry();
const banana = new Banana();

// Plates creation (context) that uses the fruits.
const fruitSalad = new FruitSalad();
fruitSalad.addFruit(strawberry);
fruitSalad.addFruit(banana);

const smoothie = new Smoothie();
smoothie.addFruit(strawberry);

// Display the plates, sharing the same fruits.
fruitSalad.display();
smoothie.display();
