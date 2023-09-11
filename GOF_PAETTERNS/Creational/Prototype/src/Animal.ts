// Prototype base class
export default class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Method to clone the object
  clone(): this {
    const clonedAnimal = Object.create(this);
    return clonedAnimal;
  }
}

