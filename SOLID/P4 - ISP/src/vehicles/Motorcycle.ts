import IMotorcycle from "./IMotorcycle";

export default class Motorcycle implements IMotorcycle {
  cc: number;
  type: string;
  kickStart: boolean;

  constructor(
    cc: number,
    type: string,
    kickStart: boolean,
    model: string,
    year: number,
    color: string
  ) {
    this.configurationVehicle(model, year, color);
    this.configurationMotorcycle(cc, type, kickStart);
  }

  startEngine(): string {
    return "Starting engine...";
  }
  configurationVehicle(model: string, year: number, color: string): void {
    console.log(
      `Motorcycle is a ${model} model, Year  ${year} and ${color} color.`
    );
  }

  configurationMotorcycle(cc: number, type: string, kickStart: boolean): void {
    let start = kickStart ? "Need to start by kick lever" : this.startEngine();
    console.log(`With ${cc} cubic cylinders, ${type} type.\n${start}.`);
  }
}
