import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.getCargo();
    this.checkWind();
    console.log("Everything ok, fly starting...");
  }
  getCargo(): void {
    console.log("Passenger already on their seats!");
  }
  checkWind(): void {
    console.log("25 knots winds, everything ok, proceeding...");
  }
}
