import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.getCargo();
        this.checkWind();
        console.log("Everything is good, starting takeoff!");
    }
    getCargo(): void {
        console.log("Passenger ready!");
    }
    checkWind(): void {
          console.log("Winds 25 knots, all good!");
    }

}