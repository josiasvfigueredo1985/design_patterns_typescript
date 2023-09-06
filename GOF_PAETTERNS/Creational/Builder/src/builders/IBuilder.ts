import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Engine from "../components/engine";
import Transmission from "../components/transmission";
import Vehicle from "../products/Vehicle";

export default interface IBuilder {
  reset(): void;
  getVehicle(): Vehicle;
  addWheel(wheel: Wheel);
  setVehicleType(value: VehicleType);
  setSeats(seats: number);
  setEngine(engine: Engine);
  setTransmission(transmission: Transmission);
}
