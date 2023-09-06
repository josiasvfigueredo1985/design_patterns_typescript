import IVehicle from "../interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting route...");
  }
  getCargo(): void {
    console.log("Package picked!");
  }
}
