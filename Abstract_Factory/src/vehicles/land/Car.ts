import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting route!");
  }
  getCargo(): void {
    console.log("Passenger on seat, seatbelt ok!");
  }
}
