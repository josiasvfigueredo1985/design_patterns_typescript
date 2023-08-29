import IVehicle from "../interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting route...");
  }
  getCargo(): void {
    console.log("Delivery started...");
    this.ecoMessage();
  }
  ecoMessage(): void {
    console.log("This delivery is eco friendly!!!");
  }
}
