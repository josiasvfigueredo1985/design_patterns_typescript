import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.getCargo();
    this.checkWind();
    console.log("Starting delivery...");
  }
  getCargo(): void {
    console.log("Package loaded!");
  }
  checkWind(): void {
    console.log("Winds OK, starting drone...");
  }
}
