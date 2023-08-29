import Bike from "../vehicles/Bike";
import IVehicle from "../interfaces/IVehicle";
import Transport from "./Transport";

export default class BikeTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Bike();
  }
}
