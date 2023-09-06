import IVehicle from "./IVehicle";

export default interface ICar extends IVehicle {
  configurationCar(
    doors: number,
    seats: number,
    classification: string,
    blackPlate: boolean,
    optionals: string[]
  ): void;
}
