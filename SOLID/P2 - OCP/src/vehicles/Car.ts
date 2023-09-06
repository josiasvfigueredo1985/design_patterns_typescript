import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Creating Car: ${color}, year: ${year}, engine: ${engine}, seats: ${seats},doors: ${doors}`
    );
  }
  startVehicle(): void {
    console.log("Vehicle started");
  }
}
