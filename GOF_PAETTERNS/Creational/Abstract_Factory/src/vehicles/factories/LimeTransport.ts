import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import EScooter from "../land/e_scooter";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new EScooter();
  }
  createTransportAircraft(): IAircraft {
    return new Drone();
  }
}
