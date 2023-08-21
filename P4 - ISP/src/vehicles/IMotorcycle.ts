import IVehicle from "./IVehicle";

export default interface IMotorcycle extends IVehicle {
  cc: number;
  type: string;
  kickStart: boolean;
}
