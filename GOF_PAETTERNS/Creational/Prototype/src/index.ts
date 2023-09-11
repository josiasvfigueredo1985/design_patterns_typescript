import Cat from "./Cat";
import Dog from "./Dog";

// Example usage
const originalDog = new Dog("Buddy");
const clonedDog = originalDog.clone();

const originalCat = new Cat("Whiskers");
const clonedCat = originalCat.clone();

console.log(originalDog.name); // Out: Buddy
console.log(clonedDog.name); // Out: Buddy

console.log(originalCat.name); // Out: Whiskers
console.log(clonedCat.name); // Out: Whiskers

originalDog.bark(); // Out: Buddy says woof!
clonedDog.bark(); // Out: Buddy says woof!

originalCat.meow(); // Out: Whiskers says meow!
clonedCat.meow(); // Out: Whiskers says meow!
clonedCat.scratch(); // Out: is scratching the couch!

const anotherCat = clonedCat.clone();
anotherCat.meow(); // Out: Whiskers says meow!
