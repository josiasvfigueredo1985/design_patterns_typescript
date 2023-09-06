export default interface IVehicle {
  startEngine(): void;
  configurationVehicle(model: string, year: number, color: string): void;
}
