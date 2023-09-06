export default interface IVehicleCar {
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void;
  startVehicle(): void;
}
