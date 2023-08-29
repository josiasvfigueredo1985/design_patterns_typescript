import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting delivery!");
  }
  getCargo(): void {
    console.log("Package loaded!");
  }
}
