import ICar from "./ICar";
import IVehicleAge from "./IVehicleAge";

export default class Car implements ICar, IVehicleAge {
  constructor(
    model: string,
    year: number,
    color: string,
    doors: number,
    seats: number,
    classification: string,
    blackPlate: boolean,
    optionals?: string[]
  ) {
    this.configurationVehicle(model, year, color);
    this.configurationCar(doors, seats, classification, blackPlate, optionals);
  }
  vehicleYearCalculation(vehicleYear: number): number {
    const year = new Date();
    let vehicleAge = year.getFullYear() - vehicleYear;
    return vehicleAge;
  }

  configurationVehicle(model: string, year: number, color: string): void {
    console.log(
      `Vehicle is a ${model} model, Year: ${year}, Color: ${color} and it's ${this.vehicleYearCalculation(
        year
      )} years old,.`
    );
  }
  configurationCar(
    doors: number,
    seats: number,
    classification: string,
    blackPlate: boolean,
    optionals?: string[]
  ): void {
    const collectionItem = blackPlate ? "collection car" : "regular car";
    const options = optionals
      ? `, with these optionals items: ${optionals.join(" and ")}`
      : ", with no optionals items";
    console.log(
      `With ${doors} doors and ${seats} seats, classified as ${classification}, it's a ${collectionItem}${options}.`
    );
    this.startEngine();
  }
  startEngine(): void {
    console.log("Starting engine...");
  }
}
