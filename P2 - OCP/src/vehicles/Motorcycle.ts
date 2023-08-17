import IVehicleMotorcycle from "./IVehicleMotorcycle";

export class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Creating motorcycle: ${color}, year: ${year}, cc: ${engine}`);
  }
  startVehicle(): void {
    console.log("Vehicle started");
  }
}
